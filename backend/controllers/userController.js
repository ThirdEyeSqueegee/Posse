var User = require("../models/userModel");

exports.user_get_data = function (req, res) {
    res.send("GET REQUEST FOR USER DATA --BOILERPLATE STATEMENT--");
};

exports.user_post_data = function (req, res) {
    res.send("POST REQUEST FOR USER DATA --BOILERPLATE STATEMENT--");
};

exports.user_delete_data = function (req, res) {
    res.send("DELETE REQUEST FOR USER DATA --BOILERPLATE STATEMENT--");
};

exports.user_auth = function (req, res) {
    res.send("POST REQUEST FOR USER AUTH --BOILERPLATE STATEMENT--");
};

exports.user_registration = function (req, res) {
    res.send("POST REQUEST FOR USER REGISTRATION --BOILERPLATE STATEMENT--");
};
