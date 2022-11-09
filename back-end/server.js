// Variables for mongoose, etc.
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var express = require('express');
var dbConn = require('./config/config');
var User = require('./models/UserSchema');
var UserRouter = require('./routes/UserRoutes');
var app = express();


// For running the server connection
server().catch(err => console.log(err));


// For connecting to the local DB
async function server() {
    console.log("connecting to db");
    await mongoose.connect(dbConn.url, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connection success");
    app.use('/Accounts', UserRouter);
}

module.exports = app;