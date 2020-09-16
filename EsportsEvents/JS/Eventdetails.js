var popup = document.getElementsByClassName('popup')[0];
var content = document.getElementsByClassName('content')[0]


var nav_text = document.querySelectorAll('.nav_text')












Tabswitch(nav_text, 'nav_text', 'nav_text text')
popups();




function Tabswitch(el, cla, newcla) {
    var fla = true;
    for (var i = 0; i < el.length; i++) {
        el[i].setAttribute('data-index', i)


        el[i].addEventListener('click', function() {
            popup.style.display = "none";
            if (fla) {
                content.innerHTML = ` <div class="news_video">
                <a href="news_details.html">
                    <div class="lenews">
                        <span>英雄联盟S10 将在上海举行</span>
    
                    </div>
                    <div class="rinews">
                        <img src="./img/图片 Copy.png" alt="">
                    </div>
                    <div class="summary"><img src="./img/fas fa-eye.svg" alt=""> 55
                        <span>3小时前</span>
                    </div>
                </a>
            </div>`
            } else {
                content.innerHTML = ` <div class="time">
                    距离比赛开始还有<span>01</span>天<span>01</span>:<span>12</span>:<span>26</span>
                </div><div class="stake">
                    <p>押胜负</p>
                    <div class="main_vote">
                        <div class="win">
                            <span>押</span>
                            <div class="win_text">Escape V 胜</div>
                        </div>
                        <div class="fail">
                            <span>押</span>
                            <div class="fail_text">M Trust 胜</div>
                        </div>
                    </div>
                </div>`

            }

            fla = !fla;

            for (var x = 0; x < el.length; x++) {
                el[x].className = cla
            }
            var index = this.getAttribute('data-index');
            this.className = newcla
        })
    }
}











//押注弹框
function popups() {

    $('.content').on('click', '.win', function(e) {
        $('.popup').css("display", "block");
        $('.title_text').text(e.target.innerText);
        $('.nonebtn').on('click', function() {
            $('.popup').css("display", "none");
        })
    });
    $('.content').on('click', '.fail', function(e) {
        $('.popup').css("display", "block");
        $('.title_text').text(e.target.innerText);
        $('.nonebtn').on('click', function() {
            $('.popup').css("display", "none");
        })
    });


}