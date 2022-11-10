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



async function createUsers() {
  const User = db.users;
  const Tutor = db.tutors;
  
  const user = new User({
    username: "Tom",
    password: "password"
  });
  var result = await user.save();
  console.log(result);
  var tutor = new Tutor ({
    user: user
  });
  var tresult = await tutor.save();
  console.log(tresult);
} 

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(db.port, () => {
  createUsers();
  console.log(`Server is running on port ${db.port}.`);
});

