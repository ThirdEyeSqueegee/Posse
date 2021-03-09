$("#pwForm").on("submit", (event) => {
    event.preventDefault();
    if ($("#inputPassword").val() === $("#confirmPassword").val()) {
        $.post("/edit/editPassword", $("#pwForm").serialize(), (redirect) => {
            window.location = redirect;
        });
    } else {
        alert("Passwords do not match");
    }
});
