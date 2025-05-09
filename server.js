const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Simple HTTP server to serve the HTML file
const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url}`);
  
  // Serve index.html for root path
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading index.html: ${err.message}`);
        return;
      }
      
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  }
  // Serve africa-map-dots.svg
  else if (req.url === '/images/africa-map-dots.svg') {
    fs.readFile(path.join(__dirname, 'public', 'images', 'africa-map-dots.svg'), (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end(`File not found: ${err.message}`);
        return;
      }
      
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
      res.end(content);
    });
  }
  // Default 404 response
  else {
    res.writeHead(404);
    res.end('File not found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});