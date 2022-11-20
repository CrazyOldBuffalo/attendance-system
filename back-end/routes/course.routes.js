module.exports = app => {

    const courseController = require("../controllers/course.controller");
    var router = require("express").Router();

    router.post("/Course/Create", courseController.createCourse);
    router.get("/Course/All", courseController.findAllCourses);
    router.get("/Course/Find/:id", courseController.findOneCourse);
    router.get("/Course/Attendance", courseController.getCourseAttendance);
    router.put("/Course/Update/Students/:id", courseController.addStudent);
    router.put("/Course/Remove/Students/:id", courseController.removeStudent);
    router.delete("/Course/Delete/:id", courseController.deleteCourse);
    
    app.use("/", router);
}