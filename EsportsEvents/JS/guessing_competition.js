var li = document.querySelectorAll('li');
var content = document.querySelector('.content');
// console.log(content);



var html = `<div class="info">
<div class="infos">
<span class="info_title">猜 Escape V  VS M Trust  胜</span>
<span class="state">已猜中</span>
</div>
<div class="detailed">
<span class="time">2020-07-25 10:10</span>
<span class="frynum">+1000鱼苗</span>
<span class="num">+2000锦鲤分</span>
</div>
</div> <div class="info">
<div class="infos">
<span class="info_title">猜 Escape V  VS M Trust  胜</span>
<span class="state">未猜中</span>
</div>
<div class="detailed">
<span class="time">2020-07-25 10:10</span>
<span class="frynum">-1000鱼苗</span>
<span class="num">-2000锦鲤分</span>
</div>
</div>
<div class="info">
<div class="infos">
<span class="info_title">猜 Escape V  VS M Trust  胜</span>
<span class="state">待开奖</span>
</div>
<div class="detailed">
<span class="time">2020-07-25 10:10</span>
<span class="frynum">-1000鱼苗</span>
<span class="num">+2000锦鲤分</span>
</div>
</div>`

var htmlone = ` <div class="info">
<div class="infos">
<span class="info_title">猜 Escape V  VS M Trust  胜</span>
<span class="state">已猜中</span>
</div>
<div class="detailed">
<span class="time">2020-07-25 10:10</span>
<span class="frynum">+1000鱼苗</span>
<span class="num">+2000锦鲤分</span>
</div>
</div>`

var htmltwo = ` <div class="info">
<div class="infos">
<span class="info_title">猜 Escape V  VS M Trust  胜</span>
<span class="state">未猜中</span>
</div>
<div class="detailed">
<span class="time">2020-07-25 10:10</span>
<span class="frynum">-1000鱼苗</span>
<span class="num">-2000锦鲤分</span>
</div>
</div>`

var htmls = ` <div class="info">
<div class="infos">
<span class="info_title">猜 Escape V  VS M Trust  胜</span>
<span class="state">待开奖</span>
</div>
<div class="detailed">
<span class="time">2020-07-25 10:10</span>
</div>
</div>`


Tabswitch(li, '', 'textSty', html, htmlone, htmltwo, htmls)

function Tabswitch(el, cla, newcla, html, htmlone, htmltwo, htmls) {

    for (var i = 0; i < el.length; i++) {
        el[i].setAttribute('data-index', i)
        el[i].addEventListener('click', function(e) {
            // console.log(e);
            // console.log(this.data - index);
            var num = this.getAttribute('data-index')
            if (num == 0) {
                content.innerHTML = html;
            } else if (num == 1) {
                content.innerHTML = htmlone;
            } else if (num == 2) {
                content.innerHTML = htmltwo;
            } else if (num == 3) {
                content.innerHTML = htmls;
            }


            for (var x = 0; x < el.length; x++) {
                el[x].className = cla
            }
            var index = this.getAttribute('data-index');
            this.className = newcla
        })
    }
}

// for (var i = 0; i < el.length; i++) {
//     el[i].setAttribute('data-index', i)
//     el[i].addEventListener('click', function() {
//         var num = this.getAttribute('data-index')
//         if (num == 0) {
//             content.innerHTML = html;
//         } else if (num == 1) {
//             content.innerHTML = htmlone;
//         } else if (num == 2) {
//             content.innerHTML = htmltwo;
//         } else if (num == 3) {
//             content.innerHTML = htmls;
//         }


//         for (var x = 0; x < el.length; x++) {
//             el[x].className = cla
//         }
//         var index = this.getAttribute('data-index');
//         this.className = newcla
//     })
// }