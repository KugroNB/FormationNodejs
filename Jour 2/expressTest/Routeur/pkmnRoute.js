const express = require('express');
const router = express.Router();

router.get('/list_pkmn/:itemId', (req,res) => {
    const id = req.params.itemId;
    console.log(`get listing request for pkmn id : ${id} from home`);
    res.send(`Page listing request for pkmn id : ${id}`);
})

router.post('/post_pkmn/:itemId', (req,res) => {
    const id = req.params.itemId;
    console.log(`post Request for pkmn id : ${id}`);
    res.send(`POST Request for pkmn id : ${id}`);
})

router.delete('/del_pkmn/:itemId', (req,res) => {
    const id = req.params.itemId;
    console.log(`delete Request for pkmn id : ${id}`);
    res.send(`DELETE Request for pkmn id : ${id}`);
})

module.exports = router;