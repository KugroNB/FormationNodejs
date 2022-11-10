import express, { Express } from 'express';
import apiRoute from '../Routeur/apiRoutes';
import dotenv from 'dotenv';

class Server {
    start() {
        dotenv.config();
        const hostname: string = process.env.IP?process.env.IP:"";
        const port: number = process.env.PORT?+process.env.PORT:3333;

        const app: Express = express();
        app.use(express.json());
        
        app.use('/api', apiRoute);

        app.listen(port, hostname, () => {console.log(`Listening on ${hostname}:${port}`)});
    }
}

export default new Server();