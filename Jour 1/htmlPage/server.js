const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const hostname = process.env.IP;
const port = process.env.PORT;

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url);
    console.log(filePath);
    let contentType = "text/html";
    let mimeType = path.extname(filePath);

    switch(mimeType){
        case '.html': contentType = 'text/html'; break;
        case '.jpg': contentType = 'image/jpg'; break;
        case '.css': contentType = 'text/css'; break;
    }

    fs.readFile(filePath,(err,data) => {
        if(err) throw err;

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.write(data, 'utf8');
        
        res.end();
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});