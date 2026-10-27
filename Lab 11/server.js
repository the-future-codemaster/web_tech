const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'students.json');
const HTML_FILE = path.join(__dirname, 'index.html');

// Helper to read student data from json file
function loadStudents(callback) {
  fs.readFile(DATA_FILE, 'utf8', (err, rawData) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return callback(null, []);
      }
      return callback(err, null);
    }
    try {
      const parsed = JSON.parse(rawData || '[]');
      callback(null, parsed);
    } catch (parseErr) {
      callback(parseErr, null);
    }
  });
}

// Helper to save student data back to json file
function saveStudents(data, callback) {
  fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8', (err) => {
    callback(err);
  });
}

const server = http.createServer((req, res) => {
  // Parse incoming request url using built-in url module
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // 1. Serve frontend HTML page
  if (pathname === '/' || pathname === '/index.html') {
    fs.readFile(HTML_FILE, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('500 - Internal Server Error: Could not read index.html');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
    return;
  }

  // 2. GET /api/students (supports optional query filter: ?q=search_term or ?id=101)
  if (pathname === '/api/students' && method === 'GET') {
    loadStudents((err, students) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Failed to read database.' }));
      }

      const queryParams = parsedUrl.query;
      let results = students;

      if (queryParams.id) {
        results = results.filter(s => s.id === queryParams.id);
      } else if (queryParams.q) {
        const queryTerm = queryParams.q.toLowerCase();
        results = results.filter(s =>
          (s.name && s.name.toLowerCase().includes(queryTerm)) ||
          (s.branch && s.branch.toLowerCase().includes(queryTerm)) ||
          (s.id && s.id.toLowerCase().includes(queryTerm))
        );
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(results));
    });
    return;
  }

  // 3. POST /api/students (Appends new student to students.json)
  if (pathname === '/api/students' && method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const newStudent = JSON.parse(body);

        if (!newStudent.id || !newStudent.name) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Roll No (id) and Name are required.' }));
        }

        loadStudents((err, students) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Database read failed.' }));
          }

          // Check if roll number already exists
          const exists = students.some(s => s.id === newStudent.id);
          if (exists) {
            res.writeHead(409, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Student with this Roll No already exists.' }));
          }

          students.push(newStudent);

          saveStudents(students, (saveErr) => {
            if (saveErr) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              return res.end(JSON.stringify({ error: 'Database write failed.' }));
            }

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Student record saved successfully!', student: newStudent }));
          });
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON payload.' }));
      }
    });
    return;
  }

  // 4. Fallback 404 handler
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 - Not Found');
});

server.listen(PORT, () => {
  console.log(`Student server running at http://localhost:${PORT}`);
});
