exports.handleLogout = (req, res) => {
    req.session.destroy();
    res.status(200).redirect("login.html");
};
