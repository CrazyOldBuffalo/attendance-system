const { registerItem } = require("../models");
const db = require("../models");
const RegisterItem = db.registerItem;

exports.find = (id) => {
    registerItem.findById(id)
}