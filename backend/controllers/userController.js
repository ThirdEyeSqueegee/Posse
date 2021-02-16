const User = require("../models/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");

exports.user_get_data = (req, res) => {
    res.status(200).json({
        test: "GET REQUEST FOR USER DATA --BOILERPLATE STATEMENT--",
    });
    //res.send("GET REQUEST FOR USER DATA --BOILERPLATE STATEMENT--");
};

exports.user_post_data = (req, res) => {
    res.status(200).json({
        test: "POST REQUEST FOR USER DATA --BOILERPLATE STATEMENT--",
    });
    //res.send("POST REQUEST FOR USER DATA --BOILERPLATE STATEMENT--");
};

exports.user_delete_data = (req, res) => {
    res.status(200).json({
        test: "DELETE REQUEST FOR USER DATA --BOILERPLATE STATEMENT--",
    });
    //res.send("DELETE REQUEST FOR USER DATA --BOILERPLATE STATEMENT--");
};

/*
    err status codes list:
        - 401: client request incomplete
        - 501: invalid form input
        - 502: unmatching (password | username) 
        - 200: valid req + no server errs, response is good as well
*/

exports.user_auth = (req, res) => {
    // need to swicth to async for db use...
    const test_username = "User_256".toLowerCase();
    const test_password = bcrypt.hashSync("my_password_512", 10);

    try {
        const user = req.body.username;
        const pass = req.body.password;
        if (!validator.isAscii(user) || !validator.isAscii(pass)) {
            // checking input should really be a client side thing...
            res.status(501).json({
                is_valid: false,
                err: "non ascii username or password",
            });
            return;
        }
    } catch {
        res.status(401).json({ err: "client request incomplete" });
        return;
    }

    const user = req.body.username.toLowerCase();
    const pass = req.body.password;

    if (!bcrypt.compareSync(pass, test_password) || test_username !== user) {
        res.status(502).json({
            is_valid: false,
            err: "unknown username or password",
        });
        return;
    } else {
        res.status(200).json({ is_valid: true });
    }
    /*//res.send("POST REQUEST FOR USER AUTH --BOILERPLATE STATEMENT--");*/
};

exports.user_registration = (req, res) => {
    res.status(200).json({
        test: "POST REQUEST FOR USER REGISTRATION --BOILERPLATE STATEMENT--",
    });
    //res.send("POST REQUEST FOR USER REGISTRATION --BOILERPLATE STATEMENT--");
};
