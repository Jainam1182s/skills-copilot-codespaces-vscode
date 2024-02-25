// Create web server
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;

    if (path === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, this is the homepage!\n');
    } else if (path === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, this is the about page!\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found\n');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});