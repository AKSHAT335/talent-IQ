// // Piston API is a service for code execution

// const PISTON_API = "https://emkc.org/api/v2/piston";

// const LANGUAGE_VERSIONS = {
//   javascript: { language: "javascript", version: "18.15.0" },
//   python: { language: "python", version: "3.10.0" },
//   java: { language: "java", version: "15.0.2" },
// };

// /**
//  * @param {string} language - programming language
//  * @param {string} code - source code to executed
//  * @returns {Promise<{success:boolean, output?:string, error?: string}>}
//  */
// export async function executeCode(language, code) {
//   try {
//     const languageConfig = LANGUAGE_VERSIONS[language];

//     if (!languageConfig) {
//       return {
//         success: false,
//         error: `Unsupported language: ${language}`,
//       };
//     }

//     const response = await fetch(`${PISTON_API}/execute`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         language: languageConfig.language,
//         version: languageConfig.version,
//         files: [
//           {
//             name: `main.${getFileExtension(language)}`,
//             content: code,
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       return {
//         success: false,
//         error: `HTTP error! status: ${response.status}`,
//       };
//     }

//     const data = await response.json();

//     const output = data.run.output || "";
//     const stderr = data.run.stderr || "";

//     if (stderr) {
//       return {
//         success: false,
//         output: output,
//         error: stderr,
//       };
//     }

//     return {
//       success: true,
//       output: output || "No output",
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error: `Failed to execute code: ${error.message}`,
//     };
//   }
// }

// function getFileExtension(language) {
//   const extensions = {
//     javascript: "js",
//     python: "py",
//     java: "java",
//   };

//   return extensions[language] || "txt";
// }

// Judge0 CE - free public instance, no API key needed
// https://github.com/judge0/judge0

const JUDGE0_URL = "https://ce.judge0.com";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54,
};

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
    cpp: "cpp",
  };
  return extensions[language] || "txt";
}

function toBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function fromBase64(str) {
  if (!str) return "";
  return decodeURIComponent(escape(atob(str)));
}

export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_IDS[language];

    if (!languageId) {
      return { success: false, error: `Unsupported language: ${language}` };
    }

    // Step 1: Submit code
    const submitResponse = await fetch(
      `${JUDGE0_URL}/submissions?base64_encoded=true&wait=false`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_code: toBase64(code),
          language_id: languageId,
        }),
      },
    );

    if (!submitResponse.ok) {
      return {
        success: false,
        error: `Submission failed: ${submitResponse.status}`,
      };
    }

    const { token } = await submitResponse.json();

    // Step 2: Poll until result is ready
    let result;
    for (let i = 0; i < 10; i++) {
      await new Promise((r) => setTimeout(r, 1000));

      const pollResponse = await fetch(
        `${JUDGE0_URL}/submissions/${token}?base64_encoded=true`,
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      result = await pollResponse.json();
      if (result.status?.id >= 3) break; // 3+ means done
    }

    const stdout = fromBase64(result.stdout);
    const stderr = fromBase64(result.stderr);
    const compileOutput = fromBase64(result.compile_output);

    // Compile error (Java / C++)
    if (compileOutput) {
      return { success: false, error: compileOutput };
    }

    // Runtime error
    if (stderr) {
      return { success: false, output: stdout, error: stderr };
    }

    // TLE / MLE / other judge errors
    if (result.status?.id > 3) {
      return {
        success: false,
        error: `Execution failed: ${result.status.description}`,
      };
    }

    return {
      success: true,
      output: stdout || "Program executed with no output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}
