$("#editForm").on("submit", (event) => {
    event.preventDefault();
    $.post("/edit/editProfile", $("#editForm").serialize(), (redirect) => {
        window.location = redirect;
    });
});

$("#delete").on("click", () => {
    if (confirm("Delete account?")) {
        $.get("/user/deleteUser", (redirect) => {
            window.location = redirect;
        });
    }
});
