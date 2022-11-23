
module.exports = app => {
    const registerController = require("../controllers/register.controller");
    const router = require("express").Router();

    router.post("/Register/Add/:id", registerController.addRegisterItem);
    router.delete("/Register/DeleteItem/:id", registerController.deleteRegisterItem);
    router.put("/Register/EditItem/:id", registerController.editRegisterItem);
    router.get("/Register/Find/:id", registerController.findRegister);
    router.get("/Register/All", registerController.getAll);
    app.use("/", router);
}