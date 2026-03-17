# Talent IQ 🚀

> **AI-Powered Collaborative Coding Interview Platform**

Talent IQ is a modern, full-stack web application that revolutionizes technical interview preparation and conduction. It provides an interactive, real-time collaborative environment where interviewers and candidates can solve coding problems together, communicate via video calls, and chat—all in one unified platform.

## ✨ Key Features

### 👥 Collaborative Coding Environment
- **Real-time Code Editing** - Synchronous code editor with live updates
- **Multi-Language Support** - JavaScript, Python, Java, C++, and more
- **Instant Code Execution** - Run and test code immediately with output display
- **Resizable Panels** - Flexible UI with draggable panels for optimal workspace

### 📹 Video & Communication
- **HD Video Calls** - Crystal-clear video interviews using Stream.io
- **Real-time Chat** - Instant messaging during sessions
- **Screen Sharing** - Share code and solutions in real-time
- **One-on-One Sessions** - Dedicated interview rooms for host and participant

### 📝 Problem Management
- **Extensive Problem Library** - Curated collection of LeetCode-style problems
- **Difficulty Levels** - Easy, Medium, and Hard categorized problems
- **Problem Descriptions** - Detailed problem statements with examples
- **Test Cases** - Validate solutions against predefined test cases

### 📊 Dashboard & Analytics
- **Session Management** - Create, join, and manage interview sessions
- **Active Sessions** - Real-time view of ongoing sessions
- **Recent Sessions** - History of past coding interviews
- **Session Duration Tracking** - Monitor interview length and productivity

### 🔐 Authentication & Security
- **Clerk Authentication** - Enterprise-grade authentication and user management
- **Session-Based Access** - Secure room access control
- **Role-Based Sessions** - Host and participant roles with different permissions

### 🎨 Modern UI/UX
- **Responsive Design** - Works seamlessly on desktop and tablets
- **Dark Mode Ready** - Professional theme with DaisyUI components
- **Intuitive Navigation** - Clean, user-friendly interface
- **Toast Notifications** - Real-time feedback and alerts

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.1.1 | UI framework |
| **Vite** | 7.1.7 | Build tool & dev server |
| **React Router** | 7.9.4 | Client-side routing |
| **Tailwind CSS** | 4.1.14 | Utility-first CSS |
| **DaisyUI** | 5.3.10 | Component library |
| **Clerk** | 5.58.0 | Authentication |
| **Stream.io Video** | 1.24.0 | Video conferencing |
| **Stream Chat** | 9.23.0 | Real-time messaging |
| **Monaco Editor** | 4.7.0 | Code editor |
| **React Query** | 5.90.5 | Data fetching & caching |
| **Axios** | 1.12.2 | HTTP client |
| **React Hot Toast** | 2.6.0 | Toast notifications |
| **Canvas Confetti** | 1.9.3 | Celebration animations |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Express.js** | 4.22.1 | Web framework |
| **Node.js** | Latest | Runtime |
| **MongoDB** | Latest | NoSQL Database |
| **Mongoose** | 8.19.1 | ODM & schema validation |
| **Clerk Express** | 1.7.41 | Backend authentication |
| **Stream.io Node SDK** | 0.7.12 | Video & chat APIs |
| **Inngest** | 3.44.3 | Async job queuing |
| **Dotenv** | 17.2.3 | Environment variables |
| **CORS** | 2.8.5 | Cross-origin requests |
| **Nodemon** | 3.1.10 | Development server |

---

## 📁 Project Structure

```
talent-IQ/
├── frontend/                          # React Application
│   ├── src/
│   │   ├── pages/                    # Route pages
│   │   │   ├── HomePage.jsx          # Landing page
│   │   │   ├── DashboardPage.jsx     # User dashboard
│   │   │   ├── ProblemsPage.jsx      # Problem listing
│   │   │   ├── ProblemPage.jsx       # Problem details & editor
│   │   │   └── SessionPage.jsx       # Video interview room
│   │   ├── components/               # Reusable React components
│   │   │   ├── CodeEditorPanel.jsx   # Monaco code editor
│   │   │   ├── OutputPanel.jsx       # Code execution results
│   │   │   ├── VideoCallUI.jsx       # Video call interface
│   │   │   └── Navbar.jsx            # Navigation bar
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useSessions.js        # Session management
│   │   │   ├── useProblems.js        # Problem data fetching
│   │   │   └── useStreamClient.js    # Stream.io integration
│   │   ├── api/                      # API client functions
│   │   ├── lib/                      # Utility functions
│   │   │   ├── piston.js             # Code execution API
│   │   │   ├── utils.js              # Helper functions
│   │   │   └── ...
│   │   ├── data/                     # Static data
│   │   │   └── problems.js           # Problem definitions
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # Entry point
│   │   └── index.css                 # Global styles
│   ├── public/                       # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── backend/                           # Express.js API Server
    ├── src/
    │   ├── controllers/              # Request handlers
    │   │   ├── sessionController.js
    │   │   └── chatController.js
    │   ├── routes/                   # API routes
    │   │   ├── sessionRoute.js
    │   │   └── chatRoutes.js
    │   ├── models/                   # MongoDB schemas
    │   │   ├── Session.js
    │   │   └── Chat.js
    │   ├── middleware/               # Express middleware
    │   │   └── authMiddleware.js
    │   ├── lib/                      # Utilities
    │   │   ├── db.js                 # MongoDB connection
    │   │   ├── env.js                # Environment config
    │   │   ├── inngest.js            # Background jobs
    │   │   └── ...
    │   └── server.js                 # Entry point
    ├── package.json
    └── .env                          # Environment variables
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0.0 or higher (comes with Node.js)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git** for version control

### Verify Installation
```bash
node --version    # v18.0.0 or higher
npm --version     # v9.0.0 or higher
git --version     # any version
```

---

## 📦 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/AKSHAT335/talent-IQ.git
cd talent-IQ
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory (from root or backend)
cd ../frontend

# Install dependencies
npm install
```

### Step 4: Configure Environment Variables

#### Backend (.env)
Create `backend/.env` with the following:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb+srv://username:password....

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Stream.io Configuration
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Client URL
CLIENT_URL=http://localhost:5173

# Inngest Configuration (optional, for background jobs)
INNGEST_EVENT_KEY=your_inngest_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

#### Frontend (.env.local)
Create `frontend/.env.local` with the following:

```env
# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API Configuration
VITE_API_BASE_URL=http://localhost:5000

# Stream.io Configuration
VITE_STREAM_API_KEY=your_stream_api_key

# Piston API (Code Execution)
VITE_PISTON_API_URL=https://emkc.org/api/v2
```

---

## 🔐 Setting Up External Services

### 1. Clerk Authentication Setup

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Select **React** as your framework
4. Get your keys from the **API Keys** section:
   - `CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
5. Update both `.env` files

### 2. Stream.io Setup

1. Visit [Stream.io](https://getstream.io/)
2. Create a free account
3. Create a new application
4. Navigate to **API Credentials**
5. Copy:
   - `API Key`
   - `API Secret`
6. Update both `.env` files

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user with username and password
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/talent-iq`
5. Update `MONGODB_URI` in `backend/.env`

### 4. Inngest Setup (Optional - for background jobs)

1. Visit [Inngest](https://www.inngest.com/)
2. Create account and app
3. Get your event and signing keys
4. Update `backend/.env`

---

## 🏃 Running the Application

### Development Mode

**Terminal 1 - Backend Server**
```bash
cd backend
npm run dev
```

Expected output:
```
Server running on port 5000
Connected to MongoDB
```

**Terminal 2 - Frontend Server**
```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v7.1.7  ready in 245 ms
➜  Local:   http://localhost:5173/
```

### Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

---

## 📖 Feature Guide

### 1. Home Page
- **Landing Page**: Introduces Talent IQ features
- **Sign Up / Sign In**: Clerk authentication
- **Call-to-Action**: Buttons to access dashboard

### 2. Dashboard
- **Active Sessions**: View ongoing interviews
- **Recent Sessions**: History of past interviews
- **Create Session**: Start new interview session
- **Session Details**: Problem, difficulty, and participant info

### 3. Problems Page
- **Problem List**: Browse all available problems
- **Filter by Difficulty**: Easy, Medium, Hard
- **Problem Details**: Description, examples, test cases
- **Start Coding**: Launch code editor for selected problem

### 4. Problem Editor (ProblemPage)
- **Monaco Editor**: Professional code editor with syntax highlighting
- **Language Selection**: Switch between programming languages
- **Run Code**: Execute code against test cases
- **Output Display**: View results and error messages
- **Start Interview**: Initiate video session with interviewer

### 5. Interview Session (SessionPage)
- **Resizable Panels**: Drag to adjust editor, output, and video sizes
- **Code Editing**: Collaborative code editor
- **Video Call**: HD video with Stream.io
- **Chat**: Real-time messaging with participants
- **Session Info**: Problem details, difficulty, participants
- **End Session**: Terminate interview and return to dashboard

---

## 🔌 API Endpoints

### Sessions

```http
GET    /api/sessions                    # Get all sessions
POST   /api/sessions                    # Create new session
GET    /api/sessions/:id                # Get session by ID
POST   /api/sessions/:id/join           # Join existing session
PUT    /api/sessions/:id/end            # End session

# Active Sessions
GET    /api/sessions/active             # Get active sessions

# User Sessions
GET    /api/sessions/user/:userId       # Get user's sessions
GET    /api/sessions/recent/:userId     # Get recent sessions
```

### Chat

```http
GET    /api/chat/channels/:sessionId    # Get chat channel
POST   /api/chat/messages               # Send message
GET    /api/chat/messages/:sessionId    # Get session messages
```

### Health & Status

```http
GET    /health                          # API health check
```

---

## 🎮 Coding Execution

Talent IQ uses the **Piston API** for secure, serverless code execution:

### Supported Languages
- JavaScript
- Python
- Java
- C++
- C#
- Go
- Ruby
- PHP
- And 50+ more

### Code Execution Flow
```javascript
// Execute code against test cases
const result = await executeCode(
  language: "javascript",
  code: "function twoSum(nums, target) { ... }",
  input: "[2,7,11,15], 9"
);

// Returns: { output, error, time, memory }
```

---

## 🔄 Real-time Features

### Socket.io Integrations

#### Video Calls
```javascript
// Stream.io handles video call initialization
const { call, channel } = useStreamClient(session);

// Video state updates in real-time
call.subscribe(state => console.log(state));
```

#### Chat Messages
```javascript
// Real-time chat via Stream Chat
socket.on('chat.message', (message) => {
  // Update UI with new message
});

socket.emit('chat.message.send', { text, sessionId });
```

#### Presence Updates
```javascript
// Track who's in the session
socket.on('user.joined', (user) => { /* ... */ });
socket.on('user.left', (user) => { /* ... */ });
```

---

## 🐛 Troubleshooting

### Issue: Clerk Authentication Not Working
**Solution:**
- Verify `CLERK_PUBLISHABLE_KEY` is correct
- Check redirect URIs in Clerk dashboard
- Clear browser cache and try again
- Check console for Clerk errors

### Issue: Video Call Not Connecting
**Solution:**
- Verify `STREAM_API_KEY` is correct
- Check browser permissions for camera/microphone
- Ensure both participants are in the same session
- Check Stream.io dashboard for errors

### Issue: Code Execution Fails
**Solution:**
- Verify code syntax is correct
- Check language is supported by Piston API
- Check input format matches expected test cases
- View detailed error in output panel

### Issue: MongoDB Connection Error
**Solution:**
- Verify `MONGODB_URI` is correct
- Check IP whitelist in MongoDB Atlas
- Ensure username/password are correct
- Test connection string in MongoDB Compass

### Issue: Frontend Not Loading
**Solution:**
- Verify frontend server is running (`npm run dev`)
- Check Vite is on port 5173
- Clear browser cache
- Check console for JavaScript errors

### Issue: API Calls Failing
**Solution:**
- Verify backend server is running on port 5000
- Check `VITE_API_BASE_URL` matches backend URL
- Verify CORS configuration
- Check network tab in DevTools

---

## 📊 Database Schema

### Session Model
```javascript
{
  _id: ObjectId,
  host: {
    clerkId: String,
    name: String,
    email: String
  },
  participant: {
    clerkId: String,
    name: String,
    email: String
  },
  problem: {
    id: String,
    title: String,
    difficulty: String
  },
  createdAt: Date,
  endedAt: Date,
  status: String, // "active", "ended"
  streamChannelId: String,
  streamCallId: String
}
```

### Chat Message Model
```javascript
{
  _id: ObjectId,
  sessionId: ObjectId,
  userId: String,
  message: String,
  createdAt: Date,
  channelId: String
}
```

---

## 🚢 Deployment

### Deploy Frontend (Vercel)
```bash
cd frontend
npm install -g vercel
vercel
```

### Deploy Backend (Render/Railway)

**Create web service:**
1. Connect GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables from `.env`

**Or use Heroku:**
```bash
heroku create talent-iq
git push heroku main
heroku config:set $(cat backend/.env | grep -v "#")
```

### Environment Variables in Production

Update these in your hosting platform:
```env
NODE_ENV=production
MONGODB_URI=production_mongodb_uri
CLERK_SECRET_KEY=your_key
STREAM_API_KEY=your_key
CLIENT_URL=https://yourdomain.com
```

---

## 📚 Documentation

### External Resources
- **Stream.io Video Docs**: https://getstream.io/video/docs/
- **Stream Chat Docs**: https://getstream.io/chat/docs/
- **Clerk Docs**: https://clerk.com/docs
- **MongoDB Docs**: https://docs.mongodb.com/
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open Pull Request

### Development Guidelines
- Use meaningful commit messages
- Test features before submitting PR
- Follow code style conventions
- Update documentation if needed

---

## 📝 Common Tasks

### Add New Problem
1. Add problem to `frontend/src/data/problems.js`
2. Include: title, description, examples, difficulty, testCases
3. Test with code editor

### Add New Language Support
1. Verify Piston API supports the language
2. Add to language selector in CodeEditorPanel
3. Update problem examples for new language

### Customize Theme
1. Edit `frontend/src/index.css` for colors
2. Modify DaisyUI theme in Tailwind config
3. Update components as needed

### Change Problem Difficulty Levels
1. Edit difficulty levels in problems data
2. Update styling in `getDifficultyBadgeClass()` utility
3. Modify filtering logic in ProblemsPage

---

## 🎯 Roadmap

### Planned Features
- [ ] Interview transcripts and recordings
- [ ] AI-powered code review suggestions
- [ ] More problem categories (system design, etc.)
- [ ] Interview scheduling and calendar integration
- [ ] Interview performance analytics
- [ ] Whiteboard sketching during sessions
- [ ] Code templates and boilerplate
- [ ] Interview feedback and ratings

---

## 📞 Support & Contact

- **GitHub Issues**: [Open an issue](https://github.com/AKSHAT335/talent-IQ/issues)
- **Email**: support@talentiq.dev
- **Documentation**: Check README and inline comments

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Stream.io](https://getstream.io/) for video and chat SDKs
- [Clerk](https://clerk.com/) for authentication
- [MongoDB](https://www.mongodb.com/) for database
- [Piston API](https://github.com/engineer-man/piston) for code execution
- [React](https://react.dev/) and [Vite](https://vitejs.dev/) communities

---

## 🎉 Getting Help

**Having issues?**
1. Check Troubleshooting section
2. Search existing GitHub issues
3. Check environment variables are set correctly
4. Read inline code comments
5. Open a new GitHub issue with details

---

**Built with ❤️ for aspiring software engineers**

**Last Updated**: March 2025  
**Version**: 1.0.0

---

### Quick Links
- 🌐 [GitHub Repository](https://github.com/AKSHAT335/talent-IQ)
- 📖 [Documentation](/)
- 🐛 [Report Bug](https://github.com/AKSHAT335/talent-IQ/issues)
- ✨ [Request Feature](https://github.com/AKSHAT335/talent-IQ/issues)
