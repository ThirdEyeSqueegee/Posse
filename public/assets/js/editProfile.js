$("#editForm").on("submit", (event) => {
    event.preventDefault();
    $.post("/edit/editProfile", $("#editForm").serialize(), (redirect) => {
        window.location = redirect;
    });
});

// Ask for confirmation before deleting user
$("#delete").on("click", () => {
    if (confirm("Delete account?")) {
        $.get("/user/deleteUser", (redirect) => {
            window.location = redirect;
        });
    }
});
