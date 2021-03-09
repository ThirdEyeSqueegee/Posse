$(document).ready(() => {
    $.get("/group/getCurrentGroup", (group) => {
        $("#groupName").append(group.name);
        $("#groupDesc").append(group.description);
        for (var i in group.members){
            $("#members").append(group.members[i].name + '<br>');
         }
        for (var i in group.posts){
           $("#posts").append(group.posts[i].name + '<br><br>');
        }
    });
});
