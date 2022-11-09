var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController');

router.get('/', function(req, res, next) {
    res.json({message: "Welcome"});
});

router.post("/A/", UserController.create);

module.exports = router;