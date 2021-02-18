exports.failedLogin = (req, res) => {
    console.log("here");
    if (!req.session.loggedIn) {
        document.getElementById("failed_login").innerHTML = "Login failed";
    }
};
