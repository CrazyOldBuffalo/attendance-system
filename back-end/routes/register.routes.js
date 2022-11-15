module.exports = app => {
    const registerController = require("../controllers/register.controller");
    const router = require("express").Router();


    router.get("/Register/Absent", registerController.MarkAbsent);

    app.use("/", router);

}