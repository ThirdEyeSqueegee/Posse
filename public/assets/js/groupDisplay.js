$(document).ready(() => {
    $.get("/group/getCurrentGroup", (group) => {
        $("#groupName").html(group.name);
        $("#groupDesc").html(group.description);
        for (member in group.members) {
            if (group.members[member] === group.owner)
                $("#members").append(group.members[member] + " (admin)<br>");
            else $("#members").append(group.members[member] + "<br>");
        }
        for (post in group.posts.reverse()) {
            created = new Date(group.posts[post].created);
            formattedDate = new Intl.DateTimeFormat("en-US", {
                dateStyle: "short",
                timeStyle: "short",
            }).format(created);
            $("#posts").append(
                "<h5>" +
                    group.posts[post].content +
                    "</h5>" +
                    '<h6 class="text-secondary">' +
                    "- " +
                    group.posts[post].author +
                    " at " +
                    formattedDate +
                    "</h6><br><br>"
            );
        }
    });

    $("#join").on("click", () => {
        $.post(
            "/group/joinGroup",
            { name: $("#groupName").text() },
            (group) => {
                if (group.joined === false)
                    $("#joined").html("You're already a member!");
                else location.reload();
            }
        );
    });

    $("#leave").on("click", () => {
        if (confirm("Leave group?")) {
            $.get("/user/leaveGroup", (data) => {
                if (data === "home.html") window.location = "group.html";
                else $("#member").html("You are not a member yet!");
            });
        }
    });
});
