$(document).ready(function () {

    $(".medicine").addClass("on");

    $(".medicine .tit").click(function () {
        $(".list .medicine_list").addClass("on").siblings().removeClass("on");
        $(".medicine").addClass("on").siblings().removeClass("on");
    });
    $(".surgery .tit").click(function () {
        $(".list .surgery_list").addClass("on").siblings().removeClass("on");
        $(".surgery").addClass("on").siblings().removeClass("on");
    });
    $(".center .tit").click(function () {
        $(".list .center_list").addClass("on").siblings().removeClass("on");
        $(".center").addClass("on").siblings().removeClass("on");
    });

});