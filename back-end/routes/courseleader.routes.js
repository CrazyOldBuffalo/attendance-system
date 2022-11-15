
module.exports = app => {
    var moduleLeaderController = require("../controllers/courseleader.controller");
    var router = require("express").Router();

    router.post("/CourseLeader/Create", moduleLeaderController.create);

    app.use("/", router);
}