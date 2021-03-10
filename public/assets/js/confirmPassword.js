$("#inputPassword, #confirmPassword").on("keyup", () => {
    if ($("#inputPassword").val() === $("#confirmPassword").val()) {
        $("#matching").html("Passwords match.");
    } else $("#matching").html("Passwords do not match.");
});
