// Display the register for that class
// Edit, Create and Delete register item
const db = require('../models');
const Register = db.registers;
const Student = db.Student;


exports.MarkAbsent= (req, res) => {
    const student = req.params.student;
    const record = Student.find({studentID: student}).then(data => {
        req.send(data);
    }).catch(err => {
        req.status(500).send({
            message:
                err.message || "Student not found"
        });
    });
};