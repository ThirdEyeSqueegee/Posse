exports.handleLogout = (req, res) => {
    req.session.loggedIn = false;
    res.status(200).redirect("login.html");
};
