// Controller that defines the commands in routes
// uses the model and users connection and sets these as vars
// create function is used for posting to the db (needs removing)


const db = require("../models");
const User = db.users;

exports.create = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    telephone: req.body.tel ? req.body.tel: "0"
  });

  user.save(user)
  .then(data => {
    res.send(data);
  })
};

// Retrieve all Tutorials from the database.
exports.findOne = (req, res) => {
  const findUser = req.body.username;
  User.find({username: findUser}).then(data => {
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
exports.findAll = (req, res) => {
  User.find().then(data => {
    res.send(data);
  });

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