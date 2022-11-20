// Display the register for that class
// Edit, Create and Delete register item
const db = require("../models");

const Register = db.registers;


exports.createRegister = (req, res) => {
    const register = new Register({
        dateTime: req.body.dateTime,
    });

    register.save(register).then(console.log("register created"));
    return register;
};

exports.findRegister = (req, res) => {
    Register.findById(req.body.registerID);
};

exports.deleteRegister = (req,res) => {
    Register.findByIdAndDelete(req.body.registerID);
};