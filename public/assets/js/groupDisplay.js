$.get("/group/getCurrentGroup", (group) => {
    $("#groupName").append(group.name);
    $("#groupDesc").append(group.description);
    $("#members").append(group.members);
});
