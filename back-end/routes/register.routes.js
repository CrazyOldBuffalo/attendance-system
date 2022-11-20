module.exports = app => {
    const registerController = require("../controllers/register.controller");
    const router = require("express").Router();

    router.post("/Register/Add/:id", registerController.addRegisterItem);
    app.use("/", router);
}