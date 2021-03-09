//gets user and then gets their groups printing them line by line using for loop
$.get("/user/getUserGroups", (groups) => {
    for (let i = 0; i < groups.length; i++) {
        $("#groups").append(
            '<a href="/group/' +
                Object.keys(groups[i])[0] +
                '">' +
                Object.values(groups[i])[0] +
                "</a><br>"
        );
    }
});

$("#searchForm").on("submit", (event) => {
    event.preventDefault();
    $.post(
        "/group/getGroup",
        $("#searchForm").serialize(),
        (group) => {
            $("#searchResults").empty();
            $("#searchResults").append(
                '<a id="groupLink" href="/group/' +
                    group._id +
                    '">' +
                    group.name +
                    "</a>"
            );
        },
        "json"
    );
});
