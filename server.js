const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  // Get the requested URL path
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // Determine the Content-Type based on the file extension
  let contentType = 'text/html';
  const extname = path.extname(filePath);
  if (extname === '.js') {
    contentType = 'text/javascript';
  } else if (extname === '.css') {
    contentType = 'text/css';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404);
        res.end('File not found');
      } else {
        // Server error
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      // Serve the file with the appropriate Content-Type
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
