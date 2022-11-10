const db = require("../models");
const User = db.users;
const Tutor = db.tutors;

exports.create = (req, res) => {
    var user = new User({
        username: "Tom",
        password: "password"
    })

    const tutor = new Tutor({
        user: user
    });

    tutor.save()
        .then(data => {
            console.log("tutor saved in db" + data);
            res.send(data);
        });

};

exports.findAll = (req, res) => {
    const tutor = req.query.user;

    var condition = tutor ? {user: {$regex: new RegExp(tutor), $options: "i"}} : {};
    Tutor.find(condition).then(data => {
        res.send(data);
    });
};