# Lab 8: Node.js Web Server

A simple, student-friendly Node.js application demonstrating a custom HTTP server, static file serving, and comprehensive error handling.

## Project Structure

```text
lab8/
├── server.js          # Main Node.js server containing middleware and routing logic
└── public/            # Directory for static assets
    ├── index.html     # Homepage HTML entry point
    ├── about.html     # About page HTML
    ├── style.css      # CSS stylesheet demonstrating text/css MIME types
    └── logo.png       # Image file demonstrating image/png MIME types
```

## Dependencies

* **Node.js**: The core JavaScript runtime environment.
* **Core Modules**: Built entirely using Node's native `http`, `fs`, and `path` modules (No external packages like Express were used).

## What I Learned

Building this project provided hands-on experience with several core concepts in backend Node.js development:

1. **Custom HTTP Server**: Used Node's built-in `http.createServer()` to listen for and respond to network requests.
2. **Routing & Middleware**: Implemented URL parsing to serve specific pages (Home, About) and created custom middleware to log all incoming requests to the console.
3. **MIME Types**: Programmatically determined file extensions and set appropriate `Content-Type` headers (`text/html`, `text/css`, `image/png`) before sending binary data.
4. **Error Handling & Edge Cases**: 
   - Gracefully handled missing files with `404 Not Found` statuses.
   - Handled server/read errors with `500 Internal Server Error` statuses.
   - Prevented **Directory Traversal Attacks** (e.g., `../../`) by validating that requested files strictly reside within the `public/` folder.

## How to Run

1. Open your terminal and navigate to the project directory.
2. Start the server: `node server.js`
3. Access the application in your browser at: `http://localhost:3000`
