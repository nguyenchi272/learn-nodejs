const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello! nodemon')
})

router.get('/name', (req, res) => {
    // res.send('Nguyen Cao Chi')
    res.render('sample')
})

module.exports = router;

