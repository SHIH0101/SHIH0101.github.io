//aos效果

AOS.init();


// 換頁籤

$(document).ready(function() {
    $(function() {
        $(".tabpage").click(function() {

            // 所有頁籤.tabpage恢復原本背景色，點擊的頁籤背景變藍色 
            $(".tabpage").css('backgroundColor', '#E1C9B1');
            $(this).css('backgroundColor', '#2D4160');

            // 所有分頁.tab移除 -on，點擊頁籤指定的分頁加上-on顯示分頁 
            $(".tab").removeClass("-on");
            $(".tab." + $(this).attr("data-target")).addClass("-on");

            // 點頁籤，滑到分頁位置#bread-page
            $('html, body').animate({
                scrollTop: $('#bread-page').offset().top
            }, 600);

            // 改背景高度
            $(".talk").addClass("-bg");

            // 顯示footer
            $("footer .container").css('display', 'block');

        });
    });
});


// 摸麵包換圖片

window.onload = function() {
    let breadimgs = document.getElementsByClassName('breadimg');

    for (let i = 0; i < breadimgs.length; i++) {

        breadimgs[i].onmouseover = function(e) {
            e.target.src = e.target.src.replace('-1', '-2');
        };

        breadimgs[i].onmouseout = function(e) {
            e.target.src = e.target.src.replace('-2', '-1');
        };

    };

};