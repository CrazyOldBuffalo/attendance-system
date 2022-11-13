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
require("./routes/academicadvisor.routes")(app);
require("./routes/moduleleader.routes")(app);
require("./routes/courseleader.routes")(app);


// Creates objects as test data to populate the db
const User = db.users;
const Student = db.students;
const AcademicAdvisor = db.academicAdvisors;
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
  })

  user1.save(user1);
  user2.save(user2);
  user3.save(user3);
  const student = new Student({
    studentID: "SU123",
    user: user1
  });
  const student2 = new Student({
    studentID: "SU223",
    user: user3
  });
  student.save(student);
  student2.save(student2);
  const academicadvisor = new AcademicAdvisor({
    user: user2,
    students: [student, student2]
  });
  academicadvisor.save(academicadvisor);
}

// listen for requests
app.listen(db.port, () => {
  createUsers();
  console.log(`Server is running on port ${db.port}.`);
});

