const db = require("../models");
const errors = require("./utils/errors.controller");
const Class1 = db.classes;
const moduleController = require("./module.controller");
const registerController = require("./register.controller");

exports.createClass = async (req,res) => {
    if(!req.body) {return err => errors.error400(err, res)};

    const register = await registerController.createRegister(req, res);
    const class1 = new Class1 ({
        classID: req.body.classID,
        className: req.body.className,
        type: req.body.type,
        register: register._id
    });

    class1.save(class1).then(data => {
        res.send(data);
    }).catch(err => errors.error500(err, res));
};

exports.findAllClasses = (req, res) => {
    Class1.find().populate({path: "students", model:"student"})
    .populate({path: "tutor", model: "tutor"})
    .populate({path: "register", model: "register"})
    .then(data=> {
        res.send(data);
    }).catch(err => errors.error500(err, res));
};

exports.findOneClass = (req,res) => {
    Class1.findOne({classID: req.params.classID}).populate({path: "students", model:"student"})
    .populate({path: "tutor", model: "tutor"})
    .populate({path: "register", model: "register"})
    .then(data => {
        if(!data) {return err => errors.error404(err, res)}
        else {res.send(data)};
    }).catch(err => errors.error500(err, res));
};

exports.addStudent = async (req, res) => {
    const studentInfo = await moduleController.returnStudentList(req, res);
    if(!studentInfo)
    Class1.findOneAndUpdate({classID: req.params.classID}, {students: studentInfo._id}).then(data => {
        if(!data) {return err => errors.error404(err, res)}
        else {
            res.send({message: "Module: " + req.params.classID + " has been updated with student: " + studentInfo.studentID});
        }
    });
};

exports.getAttendanceData = async (req, res) => {

};
