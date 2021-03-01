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
