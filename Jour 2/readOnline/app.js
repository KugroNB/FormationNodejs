//let request = require('request');
let axios = require('axios');
let fs = require('fs');

let toRead = process.argv[2];

fs.readFile(toRead, 'utf8', (err, url) => {
    if (err) throw err;

    // request(url, (err, data, body) => {
    //     console.log("body : ", body);
    // })

    axios.get(url)
    .then(function (response) {
        fs.writeFile("test.html", response.data, (err) => {
            if (err) throw err;       
        });
    })
    .catch(function (err) {
        throw err;
    })
})