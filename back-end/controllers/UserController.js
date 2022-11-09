const db = require('../models/UserSchema');
var User = db.UserSchema;

exports.create = (req, res) => {

    const User = new User({
        username: req.body.username,
        password: req.body.password
    });

    User.save().then(data => {
        console.log("User saved to DB" + data);
        res.send(data);
    }).catch(err => {
        console.log("error");
    });
};