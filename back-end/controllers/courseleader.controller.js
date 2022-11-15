const db = require("../models");
const User = db.users;
const Tutor = db.tutors;
const CourseLeader = db.courseLeaders;

exports.create = (req, res) => {
    const edit = true;
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        telephone: req.body.telephone ? req.body.telephone: "0",
        canEditModule: edit,
        canEditCourse: edit,
    });

    user.save(user);

    const tutor = new Tutor({
        tutorId: req.body.tutorid,
        userRef: user
    });

    tutor.save(tutor);

    const courseleader = new CourseLeader({
        userRef: user,
        tutorRef: tutor
    });

    courseleader.save(courseleader).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Unable to submit to module leader DB"
        });
    });
};
