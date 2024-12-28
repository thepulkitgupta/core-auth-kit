## Setup MongoDB Account
Created / Used a new Account 
Create a Cluster 
Download MongoDB and connect to the Cluster
Create initial database and collections like users,sessions,data etc based on the design plan 


## Setup Folder Structure like this for a client and server app
/my-project
│
├── /client               # React frontend (Create React App or custom setup)
│   ├── /public           # Public assets (index.html, images, etc.)
│   ├── /src              # React source code
│   │   ├── /components   # Reusable React components
│   │   ├── /pages        # Page components (e.g., HomePage, LoginPage)
│   │   ├── /utils        # Utility functions and custom hooks
│   │   ├── App.js        # Main React component
│   │   └── index.js      # Entry point for React app
│   │
├── /server               # Backend (Node.js with Express)
│   ├── /config           # Configuration files (database, environment variables)
│   ├── /controllers      # Controllers for route handling (e.g., authController.js)
│   ├── /models           # Mongoose models (e.g., user.js)
│   ├── /routes           # API routes (e.g., auth.js, user.js)
│   ├── /middleware       # Custom middlewares (e.g., authMiddleware.js)
│   ├── /utils            # Helper functions (e.g., validation.js, errorHandling.js)
│   ├── /data             # Seed or mock data (optional)
│   ├── .env              # Environment variables (Mongo URI, JWT secret)
│   ├── app.js            # Main server setup (Express app)
│   └── server.js         # Entry point for starting the server
│
├── /node_modules         # Node dependencies (for backend)
├── /build                # React build output (after running `npm run build` in client)
│
├── package.json          # Root package.json (backend and client dependencies)
├── package-lock.json     # Lock file for dependencies
└── README.md             # Project documentation
