const http = require('node:http');
require('dotenv').config();

const hostname = process.env.IP;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Succ&egraves, j'&eacutecoute depuis le port : ${port}</h1><h2>URL : ${req.url}<h2>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});