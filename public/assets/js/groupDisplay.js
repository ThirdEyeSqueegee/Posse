$(document).ready(() => {
    $.get("/group/getCurrentGroup", (group) => {
        console.log(group);
        $("#groupName").append(group.name);
        $("#groupDesc").append(group.description);
        for (let member in group.members) {
            $("#members").append(group.members[member] + "<br>");
        }
        for (var i in group.posts) {
            $("#posts").append(group.posts[i].name + "<br><br>");
        }
    });

    $("#join").on("click", (event) => {
        $.post(
            "/group/joinGroup",
            { name: $("#groupName").text() },
            (group) => {
                location.reload();
            }
        );
    });
});
