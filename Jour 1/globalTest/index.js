const http = require('node:http');
const moment = require('moment');

const hostname = '127.0.0.1';
const port = 3000;
const date  = moment().format('MMMM Do YYYY, h:mm:ss a');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello, World!</h1>
    <h2>Today is : ${date}</h2>
    <h2>Server running at http://${hostname}:${port}/</h2>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});