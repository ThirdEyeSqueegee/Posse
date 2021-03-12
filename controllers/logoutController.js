// Destroy Express session and redirect to login page
exports.handleLogout = async (req, res) => {
    req.session.destroy();
    res.status(200).redirect("login.html");
};
