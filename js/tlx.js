window.addEventListener('load', function () {
    var lis = document.querySelectorAll('.bar li')
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = '';
                lis[i].children[0].style.color = ''
            }
            this.style.backgroundColor = '#666'
            this.children[0].style.color = '#fff'
        })
    }
    var span = document.querySelector('.tab span')
    var h4 = document.querySelector('.tab h4')
    var flag = 0
    h4.addEventListener('click', function () {
        if (flag == 0) {
            span.classList.add('rot');
            // bar.style.display = 'block'
            flag = 1
        } else {
            span.classList.remove('rot');
            // bar.style.display = 'none'
            flag = 0
        }
    })
    span.addEventListener('click', function () {
        if (flag == 0) {
            span.classList.add('rot');
            // bar.style.display = 'block'
            flag = 1
        } else {
            span.classList.remove('rot');
            // bar.style.display = 'none'
            flag = 0
        }
    })
})
$(function () {
    $('.nav li').on('click', function () {
        $(this).add('gary').siblings().remove('gary')
    })
    $('.tab h4').on('click', function () {
        $(this).siblings('.bar').stop().slideToggle(300, 'linear')
    })
    $('.tab span').on('click', function () {
        $(this).siblings('.bar').stop().slideToggle(300, 'linear')
    })
})