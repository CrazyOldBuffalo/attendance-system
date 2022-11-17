module.exports = app => {
    var studentController = require('../controllers/student.controller');
    var router = require("express").Router();

    router.post("/Student/Create", studentController.createStudent);
    app.use("/", router);
}

