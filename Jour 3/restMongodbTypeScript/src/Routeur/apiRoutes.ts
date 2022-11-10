import express, {Request, Response, Router} from "express";

const router: Router = express.Router();

import movie from '../Models/movieSchema.js';

router.get('/:id', async (req:Request,res:Response) => {
    console.log(req.params.id);
    const selectedMovie = await movie.find({_id: req.params.id}) 
    console.log(selectedMovie);

    res.status(200).json(selectedMovie)
});

router.get('/', async (req:Request,res:Response) => {
    const movies = await movie.find({});
    console.log(movies);
    res.status(200).json(movies)
});

router.post('/', async (req:Request,res:Response) => {
    new movie({
        name: req.body.name,
        year: req.body.year,
        note: req.body.note,
        url: req.body.url
    }).save();

    const movies = await movie.find({});
    console.log(movies);
    res.status(201).json(movies)
});

router.put('/:id', async (req:Request,res:Response) => {
    const updatedMovie = await movie.findOneAndUpdate(
        {
            _id: req.params.id
        }, 
        {
            name: req.body.name,
            year: req.body.year,
            note: req.body.note,
            url: req.body.url
        }
    );
    console.log(updatedMovie);
    const movies = await movie.find({});
    console.log(movies);
    res.status(200).json(movies)
});

router.delete('/delete/:id', async (req:Request,res:Response) => {
    const deletedMovie = await movie.findOneAndDelete(
        {
            _id: req.params.id
        }
    );
    console.log(deletedMovie);

    const movies = await movie.find({});
    console.log(movies);
    res.status(200).json(movies)
});

export default router;