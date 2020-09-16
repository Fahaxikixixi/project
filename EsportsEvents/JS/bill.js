var li = document.querySelectorAll('li');
var content = document.querySelector('.content');


var html = ` <div class="info">
<div class="infos">
    <span class="info_title">鱼苗购买</span>
    <span class="time">2020-07-25</span>
</div>
<span class="num">+1000</span>
</div>
<div class="info">
<div class="infos">
    <span class="info_title">鱼苗购买</span>
    <span class="time">2020-07-25</span>
</div>
<span class="num">+1000</span>
</div>
<div class="info">
<div class="infos">
    <span class="info_title">鱼苗购买</span>
    <span class="time">2020-07-25</span>
</div>
<span class="num">+1000</span>
</div>
<div class="info">
<div class="infos">
    <span class="info_title">鱼苗购买</span>
    <span class="time">2020-07-25</span>
</div>
<span class="num">+1000</span>
</div>
<div class="info">
<div class="infos">
    <span class="info_title">鱼苗购买</span>
    <span class="time">2020-07-25</span>
</div>
<span class="num">+1000</span>
</div>
<div class="info">
<div class="infos">
    <span class="info_title">鱼苗购买</span>
    <span class="time">2020-07-25</span>
</div>
<span class="num">+1000</span>
</div>`

var htmlone = `<div class="info">
<div class="infos">
    <span class="info_title">锦鲤分</span>
    <span class="time">2020-07-25</span>
</div>
<span class="num">+1000</span>
</div>`



Tabswitch(li, '', 'textSty', html, htmlone)

function Tabswitch(el, cla, newcla, html, htmlone) {

    for (var i = 0; i < el.length; i++) {
        el[i].setAttribute('data-index', i)

        el[i].addEventListener('click', function(e) {

            var num = this.getAttribute('data-index')
            if (num == 0) {
                content.innerHTML = html;
            } else if (num == 1) {
                content.innerHTML = htmlone;
            }


            for (var x = 0; x < el.length; x++) {
                el[x].className = cla
            }
            var index = this.getAttribute('data-index');
            this.className = newcla
        })
    }
}