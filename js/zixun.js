$(function () {
    var n = 1;
    //显示盒子
    $('.nav-top').click(function () {
        //使隐藏的盒子显示

        if (n == 1) {
            $('.nav-top .nav-down').slideToggle();
            $('.nav-top i').css('transform', 'rotateZ(-45deg)');
            $('.nav-top').css('height', '4.875rem');
            n = 0;
            //去除加在第一个a上的current
            $('.nav-down li').children().removeClass('current');
        }

        //隐藏盒子
        else if (n == 0) {
            $('.nav-top .nav-down').slideToggle();
            $('.nav-top i').css('transform', 'rotateZ(-225deg)');
            $('.nav-top').css('height', '1.25rem');
            n = 1;
        }
    });

    //点击li时其中的a改变class
    $('.nav-down li').each(function (index, ele) {
        $('.nav-down li').click(function () {
            $(this).children().addClass('current');
            $(this).siblings().find('a').removeClass('current');
        });
    });
    $('a').click(function () {
        $(this).css('textDecoration', 'none')
    });

    //去除输入框默认字

    $('.search input').focus(function () {
        $(this).prop('placeholder', '')
    })
    $('.search input').blur(function () {
        $(this).prop('placeholder', '关键字')
    })
})