import express from "express";
const router = express.Router();

router.get('/:id', (req,res) => {
    res.status(200).json({message: "get " + req.params.id})
});

router.get('/', (req,res) => {
    res.status(200).json({message: "get all."})
});

router.post('/:id', (req,res) => {
    res.status(201).json({message: "post " + req.params.id})
});

router.delete('/:id', (req,res) => {
    res.status(202).json({message: "delete " + req.params.id})
});

export default router;