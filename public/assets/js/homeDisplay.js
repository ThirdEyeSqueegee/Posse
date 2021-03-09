//gets user and then gets their groups printing them line by line using for loop
$.get("/user/getUserGroups", (user) => {
    for (var i in user.groups) {
        $("#groups").append(user.groups[i] + "<br>");
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
