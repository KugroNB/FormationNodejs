import App from './App.js';
import fs from 'fs';

// lancement du serveur sur le port 3000
let app = App.start(3000);

// ecoute l'event lancé lorsque l'url est a "home"
app.on('home', function (res) {
  fs.readFile('index.html', 'utf8',(err,data) => {
    if(err) throw err;
    res.statusCode = 200;
    res.end(data);
  })
});

// ecoute l'event lancé lorsque l'url est a "test"
app.on('test', function (res) {
  fs.readFile('test.html', 'utf8',(err,data) => {
    if(err) throw err;
    res.statusCode = 200;
    res.end(data);
  })
});

// ecoute l'event lancé lorsque l'url est a "bye"
app.on('bye', function (res) {
  fs.readFile('bye.html', 'utf8',(err,data) => {
    if(err) throw err;
    res.statusCode = 200;
    res.end(data);
  })
});

// ecoute l'event lancé lorsque l'url est inconnue
app.on('404', function (res) {
    res.statusCode = 404;
    res.end();
});