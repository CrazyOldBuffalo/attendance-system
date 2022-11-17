const db = require("../models");
const User = db.users;
const Tutor = db.tutors;

exports.createTutor = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        telephone: req.body.telephone,
        canEditModule: req.body.module,
        canEditCourse: req.body.course
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

exports.findAllTutor = (req, res) => {
    Tutor.find().then(data => {
        res.send(data);
    });
};

exports.findOneTutor = (req, res) => {
    const findTutor = req.body.tutor;
    Tutor.find({ tutorId: findTutor }).then(data => {
        res.send(data);
    });
};

exports.findTutorUser = async(req, res) => {
    const findTutor = req.body.tutor;
    const tutordata = await Tutor.findOne({tutorId: findTutor});

    User.findById(tutordata.userRef).then(data => {
        res.send(data);
    });
};

exports.deleteTutor = async(req,res) => {
    const findTutor = req.body.tutor;
    const tutordata = await Tutor.findOne({tutorId: findTutor});

    User.findByIdAndDelete(tutordata.userRef);
    Tutor.findByIdAndDelete(tutordata._id).then(res.send({message: "User & Tutor: " + tutorId + " Deleted"}));
};