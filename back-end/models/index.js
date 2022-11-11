// File containing important info such as the db connection url
// that it requires mongoose
// sets the variable db to be an array ({}) filled with
// mongoose, the db url and the model in user.model as users
// exports this for use in server


const dbconfig = require("../config/db.config");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbconfig.url;
db.port = dbconfig.port;
db.users = require("./user.model")(mongoose);
db.tutors = require("./tutor.model")(mongoose);
db.students = require("./student.model")(mongoose);
db.academicAdvisors = require("./academicadvisor.model")(mongoose);

module.exports = db;
