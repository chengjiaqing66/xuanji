$(function () {
    $(".tab h4").click(function () {
        $(this).siblings('.bar').slideToggle(500).siblings("h4").children("span").toggleClass("rotate");
    })

    $(".nav_1").click(function () {
        $(this).children("ul").slideToggle();
    })
    // $(".nav_1").mouseenter(function () {
    //     $(this).children("ul").show();
    // });

    // $(".nav_1").mouseleave(function () {
    //     $(this).children("ul").hide();
    // });
    $(".tab h4").click(function () {
        $(this).siblings('.barPLUS').slideToggle(500).siblings("h4").children("span").toggleClass("rotate");
    })

    // $('.barPLUS').children('li').click(function () {
    //     $(this).addClass('current').siblings().removeClass('current');
    // })


    $('.nav_1 li').on("click", function () {
        $(this).parents(".nav_1").siblings("a").prop("href", "http://m.v.qq.com/cover/m/mzc002001kt6n30.html?vid=h0033i56bl1")
        // console.log($(this).parents(".nav_1").siblings("a").prop("href"));
        $('.nav_1').children("span").html('');
        $('.nav_1').prepend($(this).html());

    });

    // $('.content1').each(function (i, ele) {
    //     $(this).find('li').click(function () {
    //         $(this).parents('.nav_1').html('');
    //         // $('.nav_1').html('');
    //         console.log($(this).html());
    //         $(this).parents('.nav_1').prepend($("li").html());
    //         // $('.nav_1').prepend($(this).html());
    //     })
    // })

    $(".open a").click(function () {
        $("video").toggle();
    })
})