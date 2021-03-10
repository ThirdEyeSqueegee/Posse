$(document).ready(() => {
    $.get("/group/getCurrentGroup", (group) => {
        $("#groupName").html(group.name);
        $("#groupDesc").html(group.description);
        for (member in group.members) {
            $("#members").append(group.members[member] + "<br>");
        }
        for (post in group.posts.reverse()) {
            created = new Date(group.posts[post].created);
            formattedDate = new Intl.DateTimeFormat("en-US", {
                dateStyle: "short",
                timeStyle: "short",
            }).format(created);
            $("#posts").append(
                group.posts[post].content +
                    "<br>" +
                    "- " +
                    group.posts[post].author +
                    " at " +
                    formattedDate +
                    "<br><br>"
            );
        }
    });

    $("#join").on("click", () => {
        $.post(
            "/group/joinGroup",
            { name: $("#groupName").text() },
            (group) => {
                location.reload();
            }
        );
    });
});
