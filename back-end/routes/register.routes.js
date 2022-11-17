module.exports = app => {
    const registerController = require("../controllers/register.controller");
    const router = require("express").Router();


    router.post("/Register/Absent", registerController.MarkAbsent);
    router.post("/Register/Present", registerController.MarkAttended);
    router.post("/Register/Edit", registerController.EditAttendance);

    app.use("/", router);

}