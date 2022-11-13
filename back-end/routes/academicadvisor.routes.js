module.exports = app => {
    var academicAdvisorController = require("../controllers/academicadvisor.conroller")
    var router = require("express").Router();

    router.get("/Advisor/", academicAdvisorController.findAll);

    app.use("/", router);
}