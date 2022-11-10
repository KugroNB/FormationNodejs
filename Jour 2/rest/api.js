import express from 'express';
import apiRoute from './Routeur/apiRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', apiRoute);

app.listen(3333, console.log(`Listening on port 3333`))