const { Router } = require("express");

module.exports = app => {
    var classController = require("../controllers/class.controller");
    var router = require("express").Router();

    router.post("/Class/Create", classController.createClass);
    router.put("/Class/Students/:id", classController.addStudent);
    router.get("/Class/All/", classController.findAllClasses);
    router.get(`/Class/Find/:id}`, classController.findOneClass);
    app.use("/", router);
}