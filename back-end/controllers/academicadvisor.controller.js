const db = require("../models");
const AcademicAdvisor = db.academicAdvisors;
const User = db.users;

exports.findAllAdvisors = (req,res) => {

    AcademicAdvisor.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(404).send({
            message:
                err.message || "Table is empty"
        });
    });
};

exports.findOneAdvisor = (req,res) => {
    const advisorSearch = req.body.id;
    AcademicAdvisor.findByID(advisorSearch).then(data => {
        if(!data) res.status(404).send({
            message:
                "No advisor found for id: " + id
        });
        else res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Error occurred searching advisor"
        });
    });
};

exports.createAdvisor = (req, res) => {
    const user = new User({
        username: req.body.username,
        
    })
};