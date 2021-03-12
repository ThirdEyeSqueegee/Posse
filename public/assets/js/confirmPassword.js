// Match passwords live and prevent submission if they do not match
$("#inputPassword, #confirmPassword").on("keyup", () => {
    if ($("#inputPassword").val() === $("#confirmPassword").val()) {
        $("#register, #save").prop("disabled", false);
        $("#matching").html("Passwords match.");
    } else {
        $("#register, #save").prop("disabled", true);
        $("#matching").html("Passwords do not match.");
    }
});
