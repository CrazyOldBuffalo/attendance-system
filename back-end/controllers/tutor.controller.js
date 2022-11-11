const db = require("../models");
const Tutor = db.tutors;

exports.findAll = (req, res) => {
    const tutor = req.query.user;

    var condition = tutor ? {user: {$regex: new RegExp(tutor), $options: "i"}} : {};
    Tutor.find(condition).then(data => {
        res.send(data);
    });
};