const { render } = require('ejs')
const express = require('express')
const path = require('path')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8081;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/name', (req, res) => {
    // res.send('Nguyen Cao Chi')
    res.render(
        'sample'
    )
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})