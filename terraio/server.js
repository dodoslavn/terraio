// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send a response message
    res.end('Hello, World!\n');
});

// Set the server to listen on port 3000
server.listen(3000, '0.0.0.0', () => {
    console.log('Server is running at http://localhost:3000/');
});
