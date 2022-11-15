const db = require("../models");
const User = db.users;
const Tutor = db.tutors;
const ModuleLeader = db.moduleLeaders;

exports.create = (req, res) => {
    const edit = true;
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        telephone: req.body.telephone ? req.body.telephone: "0",
        canEditModule: edit,
        canEditCourse: false,
    });

    user.save(user);

    const tutor = new Tutor({
        tutorId: req.body.tutorid,
        userRef: user
    });

    tutor.save(tutor);

    const moduleleader = new ModuleLeader({
        userRef: user,
        tutorRef: tutor
    });

    moduleleader.save(moduleleader).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Unable to submit to module leader DB"
        });
    });
};
