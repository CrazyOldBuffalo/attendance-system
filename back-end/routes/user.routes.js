module.exports = app => {

    const userController = require("../controllers/user.controller");
    var router = require("express").Router();


    router.get("/", function (req, res, next) {
        res.json({ message: "test" });
    });

    router.post("/User", userController.create);

    router.get("/User/All", userController.findAll);

    app.use('/', router);
};


