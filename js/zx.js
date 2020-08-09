$(function() {
    // 职位关键字
    $('input').focus(function() {
        if (this.value == '职位关键字') {
            this.value == '';
        }
        $(this).css('color', 'black');
    }).blur(function() {
        if (this.value == '') {
            this.value = '职位关键字';
        }
        $(this).css('color', 'gray');
    });
    //    职位具体介绍
    $('tr').each(function(i, ele) {
        console.log(i);
        let num = 0
        $('tr:eq(' + i + ')').click(function() {
            if (num == 0) {
                $(this).children("td").eq(3).html('-')
                num = 1
            } else {
                $(this).children("td").eq(3).html('+')
                num = 0
            }

            $('.detal-tr:eq(' + (((i + 1) / 2) - 1) + ')').slideToggle(10);
        }).mouseenter(function() {
            if (i % 2 !== 0) {
                $(this).css('backgroundColor', '#ccc');
            } else {
                $(this).css('backgroundColor', 'white');
            }
        }).mouseleave(function() {
            $(this).css('backgroundColor', 'white')
        })
    })

})