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


// Creates objects as test data to populate the db
async function createUsers() {
  const User = db.users;
  const Tutor = db.tutors;
  const AcademicAdvisor = db.academicAdvisors

  const user = new User({
    username: "Tom",
    password: "password",
    email: "tom.user@email.com"
  });

  const user2 = new User({
    username: "Reuben",
    password: "password1",
    email: "reuben.user@email.com"
  });

  var result = await user.save();
  var restult2 = await user2.save();
  console.log(result + "\n" + restult2);
  var tutor = new Tutor ({
    user: user,
    canEditModule: true
  });

  var academicadvisor = new AcademicAdvisor ({
    user: user2
  });
  var tresult = await tutor.save();
  var aresult = await academicadvisor.save();
  console.log(tresult + "\n" + aresult);
} 

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(db.port, () => {
  createUsers();
  console.log(`Server is running on port ${db.port}.`);
});

