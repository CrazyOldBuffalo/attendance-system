module.exports = app => {
    var tutorController = require('../controllers/tutor.controller');
    var router = require("express").Router();

    router.post("/Tutor/Create", tutorController.createTutor);
    router.get("/Tutor/Find", tutorController.findAllTutor);
    router.get("/Tutor/One", tutorController.findOneTutor);
    router.get("/Tutor/UserFind", tutorController.findTutorUser);
    router.post("/Tutor/Delete", tutorController.deleteTutor);
    app.use("/", router);
}

