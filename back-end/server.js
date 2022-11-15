// Modules and Libraries required for the server to run
// Inclusion of other modules from within the app
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

//Defining express to use cors, json and the urlencoded setting
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connects to the db and confirms connection
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log("error connecting to db");
    process.exit();
});

//sets the origin of CORS
var corsOptions = {
  origin: "http://localhost:8081"
};

// Sets the app to use the Routes for the api
require("./routes/user.routes")(app);
require("./routes/tutor.routes")(app);
require("./routes/moduleleader.routes")(app);
require("./routes/courseleader.routes")(app);


// Creates objects as test data to populate the db
const User = db.users;
const Tutor = db.tutors;
const Student = db.students;
const ModuleLeader = db.moduleLeaders;
const CourseLeader = db.courseLeaders;
const Module = db.modules;
const Course = db.courses;
const Class = db.classes;
const Register = db.registers;

async function createUsers() {
  const user1 = new User({
    "username": "Ollie",
    "password": "password",
    "email": "test",
    "telephone": "0123356",
    "canEditModule": false,
    "canEditCourse": false
  });
  const user2 = new User({
    "username": "Reuben",
    "password": "password",
    "email": "test",
    "telephone": "0123356",
    "canEditModule": false,
    "canEditCourse": false
  });
  const user3 = new User({
    "username": "Tom",
    "password": "password",
    "email": "test",
    "telephone": "0123356",
    "canEditModule": false,
    "canEditCourse": false
  });
  const user4 = new User({
    "username": "Test",
    "password": "password",
    "email": "test",
    "telephone": "0123356",
    "canEditModule": false,
    "canEditCourse": false
  });

  user1.save(user1);
  user2.save(user2);
  user3.save(user3);
  user4.save(user4);
  const student = new Student({
    studentIdD: "SU123",
    userRef: user4
  });

  student.save(student);
  const tutor1 = new Tutor({
    tutorId: "TU123",
    userRef: user1
  });
  const tutor2 = new Tutor({
    tutorId: "TU111",
    userRef: user2
  });
  const tutor3 = new Tutor({
    tutorId: "TU132",
    userRef: user3
  });
  tutor1.save(tutor1);
  tutor2.save(tutor2);
  tutor3.save(tutor3);

  const moduleleader1 = new ModuleLeader({
    tutorRef: tutor2
  });
  const moduleleader2 = new ModuleLeader({
    tutorRef: tutor3
  });
  moduleleader1.save(moduleleader1);
  moduleleader2.save(moduleleader2);

  const courseleader = new CourseLeader({
    moduleLeaderRef: moduleleader1
  });

  courseleader.save(courseleader);

  const register1 = new Register({
    dateTime: 2022-11-14,
    attendanceList: [{
      students: student,
      attendanceStatus: true
    }]
  });

  register1.save(register1);

  const class1 = new Class({
    classID: "CL123",
    className: "Security",
    students: [student],
    tutorRef: tutor1,
    register: register1
  });

  class1.save(class1);

  const module = new Module({
    moduleName: "SAD :(",
    moduleID: "MD123",
    students: student,
    moduleLeader: moduleleader1,
    classes: [class1],
    tutors: [tutor1, tutor2]
  });

  module.save(module);

  const course = new Course({
    courseName: "Software Engineering bENG",
    courseID: "SE123",
    students: [student],
    courseLeader: courseleader,
    modules: [module]
  });

  course.save(course);
}

// listen for requests
app.listen(db.port, () => {
  createUsers();
  
  console.log(`Server is running on port ${db.port}.`);
});

