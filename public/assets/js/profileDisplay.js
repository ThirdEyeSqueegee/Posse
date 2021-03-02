$(document).ready(() => {
    $.get("/user/getCurrentUser", (user) => {
        $("#name").append(user.name);
        $("#username").append(user.username);
        $("#email").append(user.email);
    });
});
