// Display the register for that class
// Edit, Create and Delete register item
const db = require("../models");

const Register = db.registers;
const TestReg = db.testregister;
const Student = db.students;
const Class = db.classes;
const RegisterItem = db.registerItem;


exports.MarkAbsent = async (req, res, next) => {

    const classdata = await Class.findOne({ classID: req.body.classid });
    const studentdata = await Student.findOne({ studentID: req.body.studentid }).populate("user");

    if (classdata.length === 0 || studentdata.length === 0) {
        res.send({
            message: "No class or student found"
        });
        return;
    }

    if (!Class.find({ classID: classdata._id, students: studentdata._id })) {
        console.log("Student is not found in ${classdata[0].classID}");
        return;
    }
    const ritem = new RegisterItem({
        students: studentdata[0]._id,
        attended: false
    })
    ritem.save().then(ritemdata => {
        console.log("${studentdata[0]._studentID} has been marked absent");

        Register.findByIdAndUpdate(
            classdata[0].register, { $push: { attendanceList: ritem._id } },
            { new: true, userFindAndModify: false }).then(registerdata => {
                console.log("Updated Register: ${registerdata}");
                res.send(ritem);
            });
    });
};

exports.MarkAttended = async (req, res, next) => {
    const classdata = await Class.findOne({ classID: req.body.classid });
    const studentdata = await Student.findOne({ studentID: req.body.studentid });

    if (classdata.length === 0 || studentdata.length === 0) {
        res.send({
            message: "No class or student found"
        });
        return;
    };

    if (!Class.find({ classID: classdata[0]._id, students: studentdata[0]._id })) {
        res.send({
            message: "Student is not found in ${classdata[0].classID}"
        });
        return;
    };

    const ritem = new RegisterItem({
        students: studentdata[0]._id,
        attended: true
    })
    ritem.save().then(ritemdata => {
        console.log("${studentdata[0]._studentID} has been marked absent");

        Register.findByIdAndUpdate(
            classdata[0].register, { $push: { attendanceList: ritem._id } },
            { new: true, userFindAndModify: false }).then(registerdata => {
                console.log("Updated Register: ${registerdata}");
                res.send(ritem);
            });
    });
};

exports.EditAttendance = async (req, res) => {
    const classdata = await Class.findOne({ classID: req.body.classid });
    const studentdata = await Student.findOne({ studentID: req.body.studentid });
    const editstudent = req.body.status;

    if (classdata.length === 0 || studentdata.length === 0) {
        res.send({
            message: "No class or student found"
        });
        return;
    };

    if (!Class.find({ classID: classdata._id, students: studentdata._id })) {
        res.send({
            message: "Student is not found in ${classdata[0].classID}"
        });
        return;
    };

    const test = await Register.findOne({ _id: classdata.register }).populate({
        path: "attendanceList", model: "registerItem",
        populate: {
            path: "students", model: "student"
        }
    });
    console.log('%j',test);

};