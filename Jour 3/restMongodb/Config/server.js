import express from 'express';
import apiRoute from '../Routeur/apiRoutes.js';
import dotenv from 'dotenv';

class Server {
    start() {
        dotenv.config();
        const hostname = process.env.IP;
        const port = process.env.PORT;

        const app = express();
        app.use(express.json());
        
        app.use('/api', apiRoute);

        app.listen(port, hostname, () => {console.log(`Listening on ${hostname}:${port}`)});
    }
}

export default new Server();