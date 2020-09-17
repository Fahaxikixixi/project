var tab = document.getElementsByClassName('tab');
var sub = document.getElementsByClassName('sub')
var main = document.getElementsByClassName('main')[0];
var contents = document.getElementsByClassName('content')[0]


Tabswitch(tab, 'tab', 'tab tabsty')
Tabswitch(sub, 'sub', 'sub tabsty_sub')

function Tabswitch(el, cla, newcla) {
    // var data = data_index.getAttribute('data');

    var data_index = document.querySelector('.active')
    for (var i = 0; i < el.length; i++) {
        el[i].setAttribute('data-index', i)

        el[i].addEventListener('click', function() {
            contents.innerHTML = ` <div class="content_list">
                                        <a href="Eventdetails.html">
                                            <div class="eventsInfo"><span class="eventsName">欧洲大师赛夏季赛</span><span class="time">2小时17分后</span></div>
                                            <div class="ImgBox">
                                                <img src="./img/图片 2 Copy 5.png" alt="">
                                                <span>vs</span>
                                                <img src="./img/图片 Copy 5.png" alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="content_list">
                                        <a href="Eventdetails.html">
                                            <div class="eventsInfo"><span class="eventsName">欧洲大师赛夏季赛</span><span class="time">2小时17分后</span></div>
                                            <div class="ImgBox">
                                                <img src="./img/图片 2 Copy 5.png" alt="">
                                                <span>vs</span>
                                                <img src="./img/图片 Copy 5.png" alt="">
                                            </div>
                                        </a>
                                    </div><div class="content_list">
                                    <a href="Eventdetails.html">
                                        <div class="eventsInfo"><span class="eventsName">欧洲大师赛夏季赛</span><span class="time">2小时17分后</span></div>
                                        <div class="ImgBox">
                                            <img src="./img/图片 2 Copy 5.png" alt="">
                                            <span>vs</span>
                                            <img src="./img/图片 Copy 5.png" alt="">
                                        </div>
                                    </a>
                                </div><div class="content_list">
                                <a href="Eventdetails.html">
                                    <div class="eventsInfo"><span class="eventsName">欧洲大师赛夏季赛</span><span class="time">2小时17分后</span></div>
                                    <div class="ImgBox">
                                        <img src="./img/图片 2 Copy 5.png" alt="">
                                        <span>vs</span>
                                        <img src="./img/图片 Copy 5.png" alt="">
                                    </div>
                                </a>
                            </div> `


            for (var x = 0; x < el.length; x++) {
                el[x].className = cla;
            }
            var index = this.getAttribute('data-index');
            this.className = newcla;

        })
    }
}


PullUp()

function PullUp() {
    let disY, startY, endY, timer, t;
    $('.content').on('touchstart', function(e) {
        startY = e.originalEvent.changedTouches[0].pageY;
        console.log(startY);
    });
    $('.content').on('touchmove', function(e) {
        endY = e.originalEvent.changedTouches[0].pageY;
        disY = endY - startY;
        console.log(disY);
        if (disY > 0) {
            if (disY < 60) {
                $('.content').css({

                    top: disY + 'px'
                });
                if (disY > 30) {
                    $('.pull_down').css({ display: "block", "line-height": disY + 'px' })
                } else {
                    $('.pull_down').css({ display: "none" })
                }
            } else {
                $('.content').css({
                    top: 60 + 'px'
                });
            }
        }
    });
    $('.content').on('touchend', function(e) {
        endY = e.originalEvent.changedTouches[0].pageY;
        disY = endY - startY;
        if (disY > 30) {
            $('.content').css({
                top: 0 + 'px'
            });
            $('.pull_down').css({ display: "block" }).fadeToggle()
        } else {
            $('.content').css({
                top: 0 + 'px'
            });
        }
    });
}