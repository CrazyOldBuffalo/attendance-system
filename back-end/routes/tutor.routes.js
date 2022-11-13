module.exports = app => {
    var tutorController = require('../controllers/tutor.controller');
    var router = require("express").Router();

    router.get("/Tutor/", tutorController.findAll);
    router.post("/Tutor/Create", tutorController.create);
    router.get("/Tutor/Find", tutorController.findAll);
    router.get("/Tutor/One", tutorController.findOne);
    app.use("/", router);
}

