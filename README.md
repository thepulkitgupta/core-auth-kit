# Full Stack Project

This project is a Full Stack web application built with a modern technology stack, including React and Material-UI for the frontend, Node.js and Express for the backend, and MongoDB as the database.

---

## Features

- **Frontend**: Responsive design and reusable components using React and Material-UI.
- **Backend**: Secure API endpoints with Express and data validation using Mongoose.
- **Database**: MongoDB for scalable and flexible data storage.
- **State Management**: Redux for managing application state.
- **Routing**: React Router for client-side navigation.

---

## Technologies Used

### Frontend
- **React**: Library for building user interfaces.
- **Redux**: State management library.
- **Material-UI**: UI framework for pre-styled components.
- **React Router**: Client-side routing.
- **React Hook Form**: For handling forms and validation.

### Backend
- **Express**: Web framework for building APIs.
- **Mongoose**: MongoDB object modeling for Node.js.
- **bcryptjs**: For hashing and securing sensitive data.
- **jsonwebtoken (JWT)**: For authentication and session handling.
- **cors**: For handling cross-origin requests.
- **dotenv**: For managing environment variables.

### Database
- **MongoDB**: NoSQL database for scalable and flexible data management.

---

## Project Structure

```plaintext
/my-project
│
├── /client               # React frontend
│   ├── /public           # Public assets
│   ├── /src              # Source code
│   │   ├── /components   # Reusable components
│   │   ├── /pages        # Page components
│   │   ├── /utils        # Utility functions and hooks
│   │   ├── App.js        # Main React component
│   │   └── index.js      # Entry point for React app
│
├── /server               # Backend
│   ├── /config           # Configuration files
│   ├── /controllers      # Controllers for handling logic
│   ├── /models           # Database schemas
│   ├── /routes           # API routes
│   ├── /middleware       # Custom middlewares
│   ├── /utils            # Helper functions
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
│
├── /build                # React build output
├── .env                  # Environment variables
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Client-Side Setup Instructions
1. Navigate to the `/client` directory.

2. Install dependencies:
   npm install

3. Install React Router and Setup Routes
   npm install react-router-dom

4. Install Material-UI and Setup a Common Theme in the index.js 
   npm install @mui/material @emotion/react @emotion/styled

5. Install Redux and Redux Toolkit and Setup Stores 
   npm install @reduxjs/toolkit react-redux

6. Install React Hook Form and Use it form Registration and Login Form 
   npm install react-hook-form

7. Start the development server:
   npm start

## Server-Side Setup Instructions

1. Navigate to the `/server` directory.

2. Install dependencies:
   npm install

3. Set up environment variables:
   - Create a `.env` file in the `/server` directory and add the following:
     MONGO_URI=<Your MongoDB URI>
     JWT_SECRET=<Your JWT Secret>
     PORT=5000

4. Define routes in the `/routes` directory 

5. Set up MongoDB models in the `/models` directory for User Login Details

6. Implement middlewares in the `/middleware` directory for Authentication to read the token

7. Start the backend server:
   npm start