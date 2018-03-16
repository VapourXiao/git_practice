// $(function () {
//     // 文档加载完成后
//     var activeMenu;

//     var preMenu;
//     var isSub;
//     var timer;
//     $("#wrap ul li").on('mouseenter', function (e) {
//         if (!activeMenu) {
//             activeMenu = $(e.target);
//         }
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(function () {
//             if (isSub) {
//                 return;
//             }
//             var id = activeMenu.data('id');
//             $("#content").addClass("none");
//             $("#" + id).addClass("none");

//             activeMenu = $(e.target);
//             var ids = activeMenu.data('id');
//             $("#content").removeClass("none");
//             $("#" + ids).removeClass("none");
//         }, 300);
//     })

//     $("#wrap ul li").on('mouseout', function () {
//         preMenu = activeMenu;
//         var id = preMenu.data('id');
//         $("#content").addClass("none");
//         $("#" + id).addClass("none");
//     })

//     $('#content').on('mouseover', function () {

//         var id = preMenu.data('id');
//         $("#content").removeClass("none");
//         $("#" + id).removeClass("none");

//     })

//     $('#content').on('mouseleave', function () {
//         isSub = false;
//         var id = activeMenu.data('id');
//         $("#content").addClass("none");
//         $("#" + id).addClass("none");
//     });

// })

$(function () {
    // 文档加载完成后
    var activeRow;
    var activeMenu;
    var isSub;
    var timer;
    $("#wrap ul li").on('mouseenter', function (e) {
        if (!activeRow) {
            $("#content").removeClass("none");
            activeRow = $(e.target);
            activeMenu = $("#"+activeRow.data("id"));
            activeMenu.removeClass("none");
            return;
        }


        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            if (isSub) {
                return;
            }
            activeMenu.addClass("none");
        
            activeRow = $(e.target);
            activeMenu = $("#"+activeRow.data("id"));
            activeMenu.removeClass('none');
        }, 300);
    })


    $('#content').on('mouseover', function () {
          isSub = true;
    })

    $('#content').on('mouseleave', function () {
        isSub = false;
    });

})