// Display the register for that class
// Edit, Create and Delete register item
const db = require("../models");

const Register = db.registers;
const Student = db.students;
const Class = db.classes;


exports.MarkAbsent= (req, res, next) => {
    const findClass = req.query.class;
    const findStudent = req.query.student;
    const student = Student.findOne({studentID: findStudent});
    
    
};