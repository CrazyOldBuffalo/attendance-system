const db = require("../models");
const User = db.users;
const Tutor = db.tutors;

exports.create = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        telephone: req.body.telephone,
    });

    user.save(user);

    const tutor = new Tutor({
        tutorId: req.body.tutorid,
        userRef: user
    });

    tutor.save(tutor).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "unable to send to Tutor DB"
        });
    });
};

exports.findAll = (req, res) => {
    Tutor.find().then(data => {
        res.send(data);
    });
};

exports.findOne = (req, res) => {
    const findTutor = req.body.tutor;
    Tutor.find({ tutorId: findTutor }).then(data => {
        res.send(data)
    });
};