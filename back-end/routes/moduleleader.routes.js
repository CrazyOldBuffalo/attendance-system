
module.exports = app => {
    var moduleLeaderController = require("../controllers/moduleleader.controller");
    var router = require("express").Router();

    router.post("/ModuleLeader/Create", moduleLeaderController.create);

    app.use("/", router);
}