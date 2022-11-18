const db = require("../models");
const UserController = require("../controllers/user.controller");
const errors = require("./utils/errors.controller");
const User = db.users;
const Tutor = db.tutors;

exports.createTutor = async (req, res) => {
    if (!req.body) { return errors.error400(res); };

    const user = await UserController.ExtendsUserCreate(req);
    const tutor = new Tutor({
        tutorId: req.body.tutorid,
        userRef: user
    });

    tutor.save(tutor).then(data => {
        res.send(data);
    }).catch(err => errors.error404(err, res));
};

exports.findAllTutor = (req, res) => {
    Tutor.find().populate({ path: "userRef", model: "user" }).then(data => {
        res.send(data);
    }).catch(err => errors.error404(err, req));
};

exports.findOneTutor = (req, res) => {
    const findTutor = req.params.id
    Tutor.findOne({ tutorId: findTutor }).populate({ path: "userRef", model: "user" }).then(data => {
        res.send(data);
    }).catch(err => errors.error404(err, res));
};

exports.deleteTutor = async (req, res, next) => {
    const tutordata = await Tutor.findOne({ tutorId: req.params.id});

    UserController.ExtendsUserDelete(tutordata);
    Tutor.findByIdAndDelete(tutordata._id).then(res.send({ message: "User & Tutor: " + findTutor + " Deleted" }))
    .catch(err => errors.error400(err, res));
};

exports.updateTutorUser = async (req, res) => {
    var err;
    if (!req.body) { res.send({ message: "missing request data" }) };
    const tutordata = await Tutor.findOne({ tutorId: req.params.id});
    if(!tutordata) { errors.error404(err, res)};

    UserController.ExtendsUserUpdate(tutordata, req, res);
};

exports.updateModuleList = async (req, res) => {
    var err;
    if(!req.body) {res.send({message: "missing request data"})};
    const tutordata = await Tutor.findOne({tutorId: req.params.id});
    if(!tutordata) {errors.error404(err, res)};

    Tutor.findByIdAndUpdate(tutordata._id, {"$push": {"modules": req.body.modules}}).then(res.send({message: "Tutor: " + tutordata.tutorId + " has updated module list"}));
}