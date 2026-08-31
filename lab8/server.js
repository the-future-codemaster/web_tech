const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // 1. Middleware to log incoming requests to the console
    console.log(`[${new Date().toISOString()}] ${req.method} request for: ${req.url}`);

    // 2. Construct file path based on request URL
    let filePath;

    // 3 & 4. Route handling for specific HTML pages
    if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(__dirname, 'public', 'index.html');
    } else if (req.url === '/about.html') {
        filePath = path.join(__dirname, 'public', 'about.html');
    } else {
        // Fallback for other assets (images, css, etc.)
        filePath = path.join(__dirname, 'public', req.url);
    }

    // Edge Case: Prevent Directory Traversal Attacks (e.g., /../../../etc/passwd)
    const publicDirectory = path.join(__dirname, 'public');
    if (!filePath.startsWith(publicDirectory)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // 5. Read file asynchronously
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // 6. If file not found (error), return 404 response
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found: The requested route or file does not exist.');
            } else {
                // Edge Case: Handle other server errors (e.g., lack of read permissions)
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`500 Internal Server Error: ${err.message}`);
            }
        } else {
            // 7. Determine file extension and set content type accordingly
            let extname = path.extname(filePath).toLowerCase();
            let contentType = 'text/html'; // Default for our routes
            
            // 15. Use appropriate content type for valid files (text/html, images, etc.)
            switch (extname) {
                case '.css': contentType = 'text/css'; break;
                case '.js': contentType = 'text/javascript'; break;
                case '.json': contentType = 'application/json'; break;
                case '.png': contentType = 'image/png'; break;
                case '.jpg': 
                case '.jpeg': contentType = 'image/jpeg'; break;
                case '.ico': contentType = 'image/x-icon'; break;
            }

            // 8. Write 200 OK header with appropriate content type
            res.writeHead(200, { 'Content-Type': contentType });
            
            // 9. Send file content as response using binary encoding
            res.end(data, 'binary');
        }
    });
});

// 11. Handle server errors and log error messages
server.on('error', (err) => {
    console.error('Server encountered a critical error:', err.message);
});

// 12. Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
    console.log(`Test Homepage: http://localhost:${PORT}/`);
    console.log(`Test About: http://localhost:${PORT}/about.html`);
    console.log(`Test 404: http://localhost:${PORT}/invalid-route`);
});
