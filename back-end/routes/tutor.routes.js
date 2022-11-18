module.exports = app => {
    var tutorController = require('../controllers/tutor.controller');
    var router = require("express").Router();

    router.post("/Tutor/Create", tutorController.createTutor);
    router.get("/Tutor/Find", tutorController.findAllTutor);
    router.get("/Tutor/One/:id", tutorController.findOneTutor);
    router.delete("/Tutor/Delete/:id", tutorController.deleteTutor);
    router.put("/Tutor/Update/:id", tutorController.updateTutorUser);
    router.put("/Tutor/Update/Modules/:id", tutorController.updateModuleList);
    app.use("/", router);
}

