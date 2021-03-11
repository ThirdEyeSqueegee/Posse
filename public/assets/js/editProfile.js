$("#editForm").on("submit", (event) => {
    event.preventDefault();
    $.post("/edit/editProfile", $("#editForm").serialize(), (redirect) => {
        window.location = redirect;
    });
});
