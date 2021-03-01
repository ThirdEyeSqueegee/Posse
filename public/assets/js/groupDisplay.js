$(document).ready(() => {
    $.get("/group/getExistingGroup", (group) => {
        $("#groupName").append(group.name);
        $("#groupDesc").append(group.description);
        $("#members").append(group.members);
    });
});
