import http from 'http';
import EventEmitter from 'events';

class App {
  // methode de lancement du server
  start(port) {
    let emitter = new EventEmitter();

    http.createServer((req, res) => {
      console.log(req.url);
      
      // lancement des event en fonction de l'url
      switch(req.url){
        case '/': emitter.emit('home', res); break;
        case '/test': emitter.emit('test', res); break;
        case '/bye': emitter.emit('bye', res); break;
        default: emitter.emit('404', res); break;
      }

    }).listen(port)

    return emitter;
  }
}

// mise a dispo de la classe du serveur
export default new App();