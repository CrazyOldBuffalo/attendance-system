const db = require("../models");
const AcademicAdvisor = db.academicAdvisors;

exports.findAll = (req,res) => {
    const academicAdvisor = req.query.user;

    var condition = academicAdvisor ? {user: {$regex: new RegExp(academicAdvisor), $options: "i" }} : {};
    academicAdvisor.find(condition).then(data => {
        res.send(data);
    })
}