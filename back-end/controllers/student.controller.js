// Contains the search for student ID function
// 
const db = require('../models');
const User = db.users;
const Student = db.students;


exports.createStudent = (req,res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        telephone: req.body.tel,
        canEditModule: false,
        canEditCourse: false
    });

    user.save(user);

    const student = new Student({
        studentID: req.body.studentid,
        userRef: user
    });

    student.save(student).then(data => {
        res.send(data);
    })
};