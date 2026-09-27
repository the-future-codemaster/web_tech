# Lab 9: MERN Stack Todo App

A full-stack web application demonstrating the integration of MongoDB, Express.js, React, and Node.js to perform CRUD operations on a Todo list.

## Project Structure

```text
Lab 9/
├── backend/
│   ├── server.js              # Main Express server connecting to MongoDB and routing API endpoints
│   ├── package.json           # Backend dependencies and scripts
│   └── models/
│       └── Todo.js            # Mongoose schema defining the structure of the Todo tasks
└── frontend/
    ├── index.html             # HTML entry point for the React application
    ├── package.json           # Frontend dependencies and scripts
    └── src/
        ├── App.jsx            # Main React component managing state and API calls
        ├── App.css            # Stylesheet for the application UI
        ├── main.jsx           # Vite entry point
        └── components/
            ├── TaskForm.jsx   # React component containing the input field to add tasks
            ├── TaskList.jsx   # React component responsible for mapping through the array of tasks
            └── TaskItem.jsx   # React component representing an individual task and its action buttons
```

## Dependencies

* **Node.js & Express**: The backend JavaScript runtime and web framework.
* **MongoDB & Mongoose**: The NoSQL database and Object Data Modeling (ODM) library used to structure and store data.
* **React & Vite**: The frontend UI library and lightning-fast build tool used to serve the client-side application.
* **Axios**: A promise-based HTTP client used by the frontend to send requests to the backend API.

## What I Learned

Building this project provided hands-on experience with several core concepts in full-stack web development:

1. **MERN Stack Architecture**: Successfully connected a React frontend client to an Express/Node.js backend, which in turn communicated with a MongoDB database.
2. **RESTful API Development**: Implemented full CRUD (Create, Read, Update, Delete) operations using standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to manage the task data.
3. **React State Management**: Used React component state to store tasks locally, seamlessly handling user input and triggering instantaneous UI re-renders when the data updated.
4. **Database Schemas & Models**: Gained experience defining structured, strict schemas using Mongoose to validate data before it gets saved into the MongoDB collections.
5. **CORS & Port Binding**: Learned how to configure Cross-Origin Resource Sharing and strictly bind IPs (`127.0.0.1`) to ensure the frontend and backend communicate securely without port conflicts.

## How to Run

1. Open two terminals and navigate to the project directory.
2. In the first terminal, start the backend server: 
   ```bash
   cd backend
   npm start
   ```
   *(Server will run on `http://127.0.0.1:5001` and confirm database connection)*
3. In the second terminal, start the frontend app:
   ```bash
   cd frontend
   npm run dev
   ```
4. Access the application in your browser at: `http://localhost:5173`
