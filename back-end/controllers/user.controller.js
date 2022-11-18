// Controller that defines the commands in routes
// uses the model and users connection and sets these as vars
// create function is used for posting to the db (needs removing)

const db = require("../models");
const { error404 } = require("./utils/errors.controller");
const User = db.users;

exports.createUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    telephone: req.body.tel ? req.body.tel : "0",
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
  const findUser = req.params.id;
  User.find({ username: findUser }).then(data => {
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

exports.updateUser = (req, res, next) => {
  if (!req.body) { return res.status(400).send({ message: "No Update Data sent" }) };
  const username = req.params.id;
  if (!User.findOne({ username: username })) { return res.status(404).send({ message: "User is not found" }) };

  User.findOneAndUpdate({ username: username }, req.body).then(data => { res.send(data) }).catch(err => {
    res.status(400).send({
      message:
        err.message || "Error updating user ${username}"
    });
  });

};

exports.deleteOneUser = (req, res, next) => {
  const username = req.params.id
  if (!User.findOne({ username: username })) { return res.status(404).send({ message: "User is not found" }) };

  User.findOneAndDelete({ username: username }).then(res.send({ message: "User Deleted" }));
};

exports.ExtendsUserDelete = (val, res) => {
  var err;
  if(!val) {return error404(err, res)};
  User.findByIdAndDelete(val.userRef).then(console.log("User Deleted"));
  return;
}

exports.ExtendsUserUpdate = (val, req, res) => {
  var err;
  if(!val) {return error404(err, res)};
  User.findByIdAndUpdate(val.userRef, req.body).then(console.log("User Updated")).then(res.send({message: "User: " + val.userRef + " Updated"}))
  return;
}

exports.ExtendsUserCreate = (val, req, res) => {
  var err;
  if(!val) {return error404(err, res)};
  const user = new User({
    username: val.body.username,
    password: val.body.password,
    email: val.body.email,
    telephone: val.body.telephone,
    canEditModule: val.body.canEditModule,
    canEditCourse: val.body.canEditCourse
  });

  user.save(user).then(console.log("User obj Created"));
  return user;
}