$(function() {
    $(window).scroll(function() {
        document.querySelector(".pc ul").style.display = 'block'
    })

    $(".pc ul li:nth-child(2)").hover(function() {
        $(this).children(".qq").stop().fadeToggle();
    });
    $(".pc ul li:nth-child(3)").hover(function() {
        $(this).children("p").stop().fadeToggle();
    });
    $(".pc ul li:nth-child(4)").hover(function() {
        $(this).children("p").stop().slideToggle();
    });
    $('.pc li:eq(3) a img').on('click', function() {
        $('html,body').stop().animate({
            scrollTop: 0
        })
    })
    $('.app li:eq(4) a').on('click', function() {
        $('html,body').stop().animate({
            scrollTop: 0
        })
    })
})