const db = require('../models');
const Register = db.registers;
const Class1 = db.classes;

exports.create = (req,res) => {
    var date = new Date();

    const register = new Register({
        dateTime: date,
        attendanceList: null
    });

    register.save(register);

    const class1 = new Class1 ({
        classID: req.body.classid,
        className: req.body.classname,
        students: [req.body.students],
        tutorRef: req.body.tutorRef,
        register: register,
    })

    class1.save(class1).then(data => {
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:
                err.message || "Error occurred"
        });
    });
};

