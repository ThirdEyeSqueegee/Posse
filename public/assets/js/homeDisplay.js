// Populate My Groups with links to groups that the user is a member of
$.get("/user/getUserGroups", async (groups) => {
    for (let i = 0; i < groups.length; i++) {
        await $("#groups").append(
            '<a class="link-info" href="/group/' +
                Object.keys(groups[i])[0] +
                '">' +
                Object.values(groups[i])[0] +
                "</a><br>"
        );
    }
});

// Display group search results
$("#searchForm").on("submit", (event) => {
    event.preventDefault();
    $.post(
        "/group/getGroups",
        $("#searchForm").serialize(),
        (groups) => {
            $("#searchResults").empty();
            for (group in groups) {
                $("#searchResults").append(
                    '<a class="link-info" id="groupLink" href="/group/' +
                        groups[group]._id +
                        '">' +
                        groups[group].name +
                        "</a><br>"
                );
            }
            $("#searchResults").append("<br>");
        },
        "json"
    );
});
