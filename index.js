require('dotenv').config();
const express = require('express');
const APP = express();
const apiRouter = require('./server/apiRouter');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const PORT = process.env.PORT || 3005;
APP.use(compression());
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(express.static(path.join(__dirname, 'dist')));

APP.use('/catwalk', apiRouter);

APP.use((req,res)=>{res.sendFile(`${__dirname}/dist/index.html`)});

APP.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});