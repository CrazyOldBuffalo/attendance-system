// Controller that defines the commands in routes
// uses the model and users connection and sets these as vars
// create function is used for posting to the db (needs removing)


const db = require("../models");
const User = db.users;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: {$regex: new RegExp(username), $options: "i"} } : {};
  User.find(condition).then(data => {
    res.send(data);
  })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred"
        });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };