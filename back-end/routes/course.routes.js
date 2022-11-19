module.exports = app => {

    const courseController = require("../controllers/course.controller");
    var router = require("express").Router();

    router.post("/Course/Create", courseController.createCourse);
    router.get("/Course/All", courseController.findAllCourses);
    router.get("/Course/Find/:id", courseController.findOneCourse);

    app.use("/", router);
}