module.exports = app => {
    const registerController = require("../controllers/register.controller");
    const router = require("express").Router();

    router.post("/Register/Add/:id", registerController.addRegisterItem);
    router.delete("/Register/DeleteItem/:id", registerController.deleteRegisterItem);
    app.use("/", router);
}