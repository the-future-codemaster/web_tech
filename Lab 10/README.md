# Lab 10: MERN Stack Blog App

A full-stack web application demonstrating the integration of MongoDB, Express.js, React, and Node.js to perform CRUD operations on blog posts.

## Project Structure

```text
Lab 10/
├── server/
│   ├── index.mjs              # Main Express server connecting to MongoDB and routing API endpoints
│   ├── package.json           # Backend dependencies and scripts
│   ├── db/
│   │   └── conn.mjs           # MongoDB connection setup
│   └── routes/
│       └── post.mjs           # API routes for blog posts
└── app/
    ├── index.html             # HTML entry point for the React application
    ├── package.json           # Frontend dependencies and scripts
    └── src/
        ├── App.jsx            # Main React component with routing
        ├── main.jsx           # Vite entry point
        ├── components/
        │   ├── Navbar.jsx     # Navigation bar component
        │   └── PostSummary.jsx# Component to display post summaries
        └── pages/
            ├── Home.jsx       # Home page listing all posts
            ├── Create.jsx     # Page to create a new post
            ├── Post.jsx       # Page to view, edit, and delete a specific post
            └── Archive.jsx    # Page to view archived posts
```

## Dependencies

* **Node.js & Express**: The backend JavaScript runtime and web framework.
* **MongoDB**: The NoSQL database used to structure and store data.
* **React & Vite**: The frontend UI library and lightning-fast build tool used to serve the client-side application.
* **React Router DOM**: Used for client-side routing.

## What I Learned

Building this project provided hands-on experience with several core concepts in full-stack web development:

1. **MERN Stack Architecture**: Successfully connected a React frontend client to an Express/Node.js backend, which in turn communicated with a MongoDB database.
2. **RESTful API Development**: Implemented full CRUD (Create, Read, Update, Delete) operations using standard HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`) to manage the blog post data.
3. **React State Management & Routing**: Used React component state to store posts locally and `react-router-dom` for navigating between different views (Home, Create, Post Detail).
4. **Database Connections**: Gained experience connecting to MongoDB Atlas and performing operations using the official MongoDB Node.js driver.
5. **CORS & Environment Variables**: Learned how to configure Cross-Origin Resource Sharing and securely manage database credentials using `.env` files.

## How to Run

1. Open two terminals and navigate to the project directory.
2. In the first terminal, start the backend server: 
   ```bash
   cd server
   node index.mjs
   ```
   *(Ensure your MongoDB Atlas IP is whitelisted and `.env` is configured correctly)*
3. In the second terminal, start the frontend app:
   ```bash
   cd app
   npm run dev
   ```
4. Access the application in your browser at: `http://localhost:5173`
