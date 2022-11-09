// Variables for mongoose, etc.
const mongoose = require("mongoose");
var db = require('./config/config');
var User = require('./models/UserSchema');

// For future use when we seperate the models and everything.
//const usermodel = require("./models/userModel");

// For running the server connection
server().catch(err => console.log(err));


// For connecting to the local DB
async function server() {
    console.log("connecting to db");
    await mongoose.connect(db.url);
    console.log("connection success");

    // Test script to create a model and schema in mongo
    // Test to create a new user object on the above model/schema
    const test = new User({ username: "model", password: "success"});

    // Test to save the above object to the db and then call it back (it will add more each time you run this script)
    await test.save();
    console.log("success")
    var log = await User.find();
    console.log(log);
}

