window.onload = (function () {
    var detailList = document.querySelectorAll('.events .detail:nth-of-type(n+5)')
    var btn = document.querySelector('.button');
    btn.onclick = function () {
        if (btn.innerHTML == '展开更多') {
            for (var i = 0; i < detailList.length; i++) {
                detailList[i].style.display = 'block';
                btn.innerHTML = '收起更多';
            }
        } else if (btn.innerHTML == '收起更多') {
            for (var i = 0; i < detailList.length;i++) {
                detailList[i].style.display = 'none';
                btn.innerHTML = '展开更多';
            }
        }
   }








































}) 