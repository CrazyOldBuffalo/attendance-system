const { Router } = require("express");

module.exports = app => {
    var classController = require("../controllers/class.controller");
    var router = require("express").Router();

    router.post("/Class/Create", classController.create);

    app.use("/", router);
}