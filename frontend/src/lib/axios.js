// // import axios from 'axios';

// // const axiosInstance = axios.create({
// //     baseURL:import.meta.env.VITE_API_URL,
// //     withCredentials: true //by adding this broweser will send cookies along with requests to the backend
// // });

// // export default axiosInstance;

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000/api",
//   withCredentials: true, // 🔥 THIS FIXES 401
// });

// export default axiosInstance;

//final

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;

