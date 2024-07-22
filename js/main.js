$(document).ready(function () {

    /* #both에서 버튼 호버시 아이콘 바뀌게 */
    /* 진료/예약 */
    $(".btn_txt i:nth-of-type(2)").hide();

    $(".btn_txt").hover(function () {
        $(".btn_txt i:nth-of-type(2)").stop().fadeToggle()
        $(".btn_txt i:nth-of-type(1)").stop().fadeToggle()
    });

    /* 의료진/진료과 */
    $(".calendar i:nth-of-type(2)").hide();

    $(".btn_txt").hover(function () {
        $(".btn_txt i:nth-of-type(2)").stop().fadeToggle()
        $(".btn_txt i:nth-of-type(1)").stop().fadeToggle()
    });


    /* 병원소개 */
    /* 박스 호버? 클릭? 시 박스 플립 , 관련 사진으로 섹션 배경 변경 */
    $("#intro .intro_link .box1").mouseover(function () {
        $("#intro").addClass("on1")
    });
    $("#intro .intro_link .box1").mouseleave(function () {
        $("#intro").removeClass("on1")
    });

    $("#intro .intro_link .box2").mouseover(function () {
        $("#intro").addClass("on2")
    });
    $("#intro .intro_link .box2").mouseleave(function () {
        $("#intro").removeClass("on2")
    });

    $("#intro .intro_link .box3").mouseover(function () {
        $("#intro").addClass("on3")
    });
    $("#intro .intro_link .box3").mouseleave(function () {
        $("#intro").removeClass("on3")
    });
});