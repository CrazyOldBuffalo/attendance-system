module.exports = app => {
    var tutorController = require('../controllers/tutor.controller');
    var router = require("express").Router();

    router.post("/Tutor/", tutorController.create);

    router.get("/Tutor/", tutorController.findAll);

    app.use("/", router);
}

