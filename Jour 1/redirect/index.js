const http = require('node:http');

const hostname = process.argv[2];
const port = process.argv[3];

const server = http.createServer((req, res) => {
    const target = process.argv[4];
    const url = req.url;

    if (url === "/") {
        res.statusCode=200;
        res.setHeader("Content-Type", "text/html");
        res.end(`add /redirect at the end of the url for : ${target}`);
    } else if (url === "/redirect") {
        res.statusCode = 302;
        res.setHeader("location", target)
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});