exports.handleLogout = (req, res) => {
    req.session.loggedIn = false;
    res.redirect("login.html");
};
