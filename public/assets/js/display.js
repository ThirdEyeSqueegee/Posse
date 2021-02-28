$("#searchForm").on("submit", (event) => {
    event.preventDefault();
    $.post(
        "/group/getGroup",
        $("#searchForm").serialize(),
        (group) => {
            $("#searchResults").empty();
            $("#searchResults").append(
                '<a href="/group/' + group._id + '">' + group.name + "</a><br>"
            );
        },
        "json"
    );
});
