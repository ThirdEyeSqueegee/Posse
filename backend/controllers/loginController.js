exports.get_login_page = (req, res) => {
    res.status(200).json({
        test: "GET REQUEST FOR LOGIN PAGE --BOILERPLATE STATEMENT--",
    });
    //res.send("GET REQUEST FOR LOGIN PAGE --BOILERPLATE STATEMENT--");
};

exports.get_registration_page = (req, res) => {
    res.status(200).json({
        test: "GET REQUEST FOR REGISTRATION PAGE --BOILERPLATE STATEMENT--",
    });
    //res.send("GET REQUEST FOR REGISTRATION PAGE --BOILERPLATE STATEMENT--");
};
