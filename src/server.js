require('dotenv').config();
const { render } = require('ejs')
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const app = express();
const port = process.env.PORT || 8081;

//config view engine, staticfile
configViewEngine(app);

app.use('/', webRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})