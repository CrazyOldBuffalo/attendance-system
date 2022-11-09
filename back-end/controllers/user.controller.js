const db = require("../models");
const User = db.users;

exports.create = (req, res) =>  {
    if (!req.body.username) {
        res.status(400).send({message: "request empty"});
        return;
    }
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(user)
        .then( data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error creating object"
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = title ? { title: {$regex: new RegExp(username), $options: "i"} } : {};
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

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };