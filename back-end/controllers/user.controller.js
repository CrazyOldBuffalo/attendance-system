// Controller that defines the commands in routes
// uses the model and users connection and sets these as vars
// create function is used for posting to the db (needs removing)


const { Exception } = require("sass");
const db = require("../models");
const User = db.users;

exports.createUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    telephone: req.body.tel ? req.body.tel: "0",
    canEditModule: false,
    canEditCourse: false
  });

  user.save(user)
  .then(data => {
    res.send(data);
  })
};

// Retrieve all Tutorials from the database.
exports.findOneUser = (req, res) => {
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
exports.findAllUsers = (res) => {
  User.find().then(data => {
    res.send(data);
  });
};

exports.updateUserPassword = async(req, res) => {
  if(!req.body){return res.status(400).send({message: "No Request Data Sent"})};
  if(req.body.password.length < 5) {return res.status(400).send({message: "Password is not long enough"})};
  if(!User.findOne({username: req.body.username})) {return res.status(400).send({message: "User is not found"})};


  const userdata = await User.findOne({username: req.body.username});

  console.log(userdata._id);
  User.findByIdAndUpdate(userdata._id, {password: req.body.password}).then(data => {
    res.send(data);
  });
};

exports.updateUserTel = (req, res) => {

};

exports.deleteOneUser = (req, res) => {

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