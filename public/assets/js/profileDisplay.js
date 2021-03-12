// Populate profile page with user details
$.get("/user/getCurrentUser", (user) => {
    $("#name").html(user.name);
    $("#username").html(user.username);
    $("#email").html(user.email);
});
