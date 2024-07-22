$(document).ready(function () {

    $(".gnb_wrap").hide();
    $("#header").addClass("on");

    $(".ham").click(function () {
        $(".gnb_wrap").fadeIn()
        $("#fp-nav ul li").hide()
        $("#header").removeClass("on");
    });

    $(".all_close").click(function () {
        $(".gnb_wrap").fadeOut()
        $("#fp-nav ul li").show()
        $("#header").addClass("on");
    });


    /* gnb 호버시 2차메뉴 보이기 - 전체*/
    $(".depth2,.depth2_bg").hide();

    $(".gnb > li").hover(function () {
        $(".depth2_bg").stop().fadeToggle(300);
        $(".gnb > li").find(".depth2").stop().fadeToggle(300);
        $("#header").addClass("on");
    });

    /* 사이드바 */
    $(" .side_arrow i:nth-of-type(2)").hide();

    $(" .side_arrow i:nth-of-type(1)").click(function () {
        $(" .side_arrow i:nth-of-type(2)").show();
        $(" .side_arrow i:nth-of-type(1)").hide();
        $("#sidebar").addClass("on")
    });
    $(" .side_arrow i:nth-of-type(2)").click(function () {
        $(" .side_arrow i:nth-of-type(1)").show();
        $(" .side_arrow i:nth-of-type(2)").hide();
        $("#sidebar").removeClass("on")
    });


    $('#fullpage').fullpage({
        //options here
        anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],
        menu: '#myMenu',
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['예약/발급', '의료진/진료과', '이용안내', '병원소개', '찾아오시는길'],
        showActiveTooltip: true,
        responsiveWidth: 1200, // 반응형 옵션
        // 1200px 이하로 내려가면 기본 스크롤로 변경
        autoScrolling: true,
        scrollHorizontally: true,
        /* 콜백함수 */

        // 페이지 이동할 때
        'onLeave': function (origin/* 현재요소 */, destination/* 도착지 */, direction/* 스크롤 방향 */, trigger) {
            //구역 6에 도착
            if (destination == 6) {
                $("#fp-nav").fadeOut();
            }
            else {
                $("#fp-nav").fadeIn();
            };
        }
    });




});