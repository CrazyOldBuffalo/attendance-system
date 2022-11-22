
module.exports = app => {
    const registerController = require("../controllers/register.controller");
    const router = require("express").Router();

    router.post("/Register/Add/:id", registerController.addRegisterItem);
    router.delete("/Register/DeleteItem/:id", registerController.deleteRegisterItem);
    router.put("/Register/EditItem/:id", registerController.editRegisterItem);
    app.use("/", router);
}