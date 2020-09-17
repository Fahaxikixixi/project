var popup = document.getElementsByClassName('popup')[0];
var content = document.getElementsByClassName('content')[0]


var nav_text = document.querySelectorAll('.nav_text')
var text = document.querySelector('.text')

var nav = document.querySelector('.nav')










// Tabswitch(nav_text, 'nav_text', 'nav_text text')
popups();




// function Tabswitch(el, cla, newcla) {

var fla = false;


for (var i = 0; i < nav.children.length; i++) {

    nav.children[i].setAttribute('data-index', i)
    var data = text.getAttribute('data-index')


    nav.children[i].addEventListener('click', function() {
        popup.style.display = "none";

        // clearTimeout(time)
        var index = this.getAttribute('data-index');

        // content.innerHTML = '';
        // fla = true;

        // if (fla) {
        if (index != data) {
            if (index > data) {
                $('.content').animate({
                    opacity: "0",
                    left: '-300px'
                }, 500)

            } else if (index < data) {
                $('.content').animate({
                    opacity: "0",
                    left: '300px'
                }, 500)
            }
            $('.content').animate({
                opacity: "0",
                left: '0px'
            }, 100)
            $('.content').animate({
                opacity: "1",
                // left: '0px'
            }, 1000)


        }



        var time = setTimeout(function() {
            if (index == 1) {
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
        }, 500)


        // }


        // else {
        //     // if (index == data) {
        //     $('.content').animate({
        //             opacity: "1",
        //             left: '0px'
        //         }, 0)
        //         // }

        // }




        for (var x = 0; x < nav.children.length; x++) {
            nav.children[x].className = ''
        }
        this.className = 'text';
        data = index;
    })
    fla = true;
}
// }


function output() {

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