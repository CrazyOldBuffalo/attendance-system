module.exports = app => {
    const registerController = require("../controllers/register.controller");
    const router = require("express").Router();
<<<<<<< HEAD


    router.get("/Register/Absent", registerController.MarkAbsent);

    app.use("/", router);
=======
>>>>>>> 36ef3e5607fdb68895547a9fd3bda55bcf3f0304
}