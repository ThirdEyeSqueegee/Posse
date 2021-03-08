//gets user and then gets their groups printing them line by line using for loop
$(document).ready(() => {
    $.get("/user/getUserGroups", (user) => {
        for(var i in user.groups){
            $("#groups").append(user.groups[i] + '<br>');
        }
    });
});
//My thoughts ar to use everything from  $.post( ... until ... "json"); replacing 
//$("#seachForm").serialize with the group name(user.groups[i]) to find the group
//and keep everything else the same from the code below. I tried doing this for
//a couple hours, but couldn't get it to work
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