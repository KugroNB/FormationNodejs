const express = require('express');
const router = express.Router();

router.get('/list_test/:itemId', (req,res) => {
    const id = req.params.itemId;
    console.log(`get listing request for test id : ${id} from home`);
    res.send(`Page listing request for test id : ${id}`);
})

router.post('/post_test/:itemId', (req,res) => {
    const id = req.params.itemId;
    console.log(`post Request for test id : ${id}`);
    res.send(`POST Request for test id : ${id}`);
})

router.delete('/del_test/:itemId', (req,res) => {
    const id = req.params.itemId;
    console.log(`delete Request for test id : ${id}`);
    res.send(`DELETE Request for test id : ${id}`);
})

module.exports = router;