$.get("/user/getCurrentUser", (user) => {
    $("#name").html(user.name);
    $("#username").html(user.username);
    $("#email").html(user.email);
});

$("#delete").on("click", () => {
    $.get("/user/deleteUser", (redirect) => {
        window.location = redirect;
    });
});
