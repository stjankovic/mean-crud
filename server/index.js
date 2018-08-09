const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

//express
const app = express();

//body-parser
app.use(bodyParser.json());

//cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


//DB config
const db = require('./config/keys').mongoURI;

//mongo-db
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('~Mongo connected~'))
    .catch(err => console.log(err));

//routes
app.use('/api/users', users);


//port for server
const port = process.env.PORT || 5000;

//start server
app.listen(port, () => console.log(`~Server on * ${port}~`));