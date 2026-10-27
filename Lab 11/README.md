# Lab 11: Student Information Web Server

A lightweight web server built using Node.js to demonstrate core built-in modules (`fs`, `http`, and `url`) without relying on any external npm packages.

## Project Structure

```text
Lab 11/
├── server.js          # Core HTTP server handling routing, file operations, and REST APIs
├── index.html         # Frontend dashboard interface for viewing and adding students
├── students.json      # File-based database storing student records
└── README.md          # Project documentation and guide
```

## Built-in Modules Used

* **`http`**: Used to initialize the web server with `http.createServer()`, handle incoming client requests, manage HTTP methods (`GET`, `POST`), set headers, and return response status codes.
* **`fs`**: Used for asynchronous file system interactions (`fs.readFile` and `fs.writeFile`) to serve static HTML and persist student data into `students.json`.
* **`url`**: Used to parse incoming request URLs and query strings (`url.parse(req.url, true)`) to support search and filtering parameters.

## What I Learned

Building this project provided practical hands-on experience with foundational Node.js concepts:

1. **Native HTTP Server Creation**: Learned how to construct a web server and handle requests from scratch without third-party frameworks like Express.
2. **File System Persistence**: Understood how to read and write JSON data to the local disk using Node's asynchronous `fs` module to retain application data across requests.
3. **URL Parsing & Query Handling**: Gained practical experience in using the `url` module to extract query parameters (e.g., `?q=CSE`) to implement server-side search filtering.
4. **RESTful Request Routing**: Implemented endpoint routing and handled POST request payloads by buffering data stream chunks (`req.on('data')` and `req.on('end')`).
5. **Full-Stack Coordination**: Connected a vanilla HTML/CSS frontend to the backend API via asynchronous `fetch()` calls.

## How to Run

1. Open a terminal and navigate to the project directory:
   ```bash
   cd "Lab 11"
   ```
2. Start the Node.js server:
   ```bash
   node server.js
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```
