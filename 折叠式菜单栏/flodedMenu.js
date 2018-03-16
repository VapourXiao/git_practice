$(function(){
    var activeMenu;
    $("ul li").on("click",function(e){
        if(!activeMenu){
           activeMenu = $(e.target);
           activeMenu.children("ul").removeClass("none");
           return;
        }
        activeMenu.children("ul").addClass("none");
        activeMenu = $(e.target);
        activeMenu.children("ul").removeClass("none");
    })
});