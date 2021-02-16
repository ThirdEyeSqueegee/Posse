const Group = require("../models/groupModel");

exports.group_get_data = (req, res) => {
    res.status(200).json({
        test: "GET REQUEST FOR GROUP DATA --BOILERPLATE STATEMENT--",
    });
    //res.send("GET REQUEST FOR GROUP DATA --BOILERPLATE STATEMENT--");
};

exports.group_post_data = (req, res) => {
    res.status(200).json({
        test: "POST REQUEST FOR GROUP DATA --BOILERPLATE STATEMENT--",
    });
    //res.send("POST REQUEST FOR GROUP DATA --BOILERPLATE STATEMENT--");
};

exports.group_delete_data = (req, res) => {
    res.status(200).json({
        test: "DELETE REQUEST FOR GROUP DATA --BOILERPLATE STATEMENT--",
    });
    //res.send("DELETE REQUEST FOR GROUP DATA --BOILERPLATE STATEMENT--");
};

exports.group_create = (req, res) => {
    res.status(200).json({
        test: "POST REQUEST FOR GROUP CREATION --BOILERPLATE STATEMENT--",
    });
    //res.send("POST REQUEST FOR GROUP CREATION --BOILERPLATE STATEMENT--");
};
