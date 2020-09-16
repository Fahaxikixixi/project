export function Tabswitch(element, diselement) {
    console.log(123);
}

for (var i = 0; i < tab.length; i++) {
    var content = document.createElement('div');
    tab[i].setAttribute('data-index', i)
    content.className = 'content';
    main.appendChild(content);
    var contents = document.getElementsByClassName('content')
    console.log(i);

    contents[0].innerHTML = ` <div class="content_list">
                <a href="Eventdetails.html">
                    <div class="eventsInfo"><span class="eventsName">欧洲大师赛夏季赛</span><span class="time">2小时17分后</span></div>
                    <div class="ImgBox">
                        <img src="./img/图片 2 Copy 5.png" alt="">
                        <span>vs</span>
                        <img src="./img/图片 Copy 5.png" alt="">
                    </div>
                </a>
            </div>`
    tab[i].addEventListener('click', function() {
        for (var x = 0; x < tab.length; x++) {
            tab[x].className = 'tab'
            contents[x].innerText = x;
            contents[x].style.display = "none"
            if (x == 0) {
                contents[0].innerHTML = ` <div class="content_list">
                    <a href="Eventdetails.html">
                        <div class="eventsInfo"><span class="eventsName">欧洲大师赛夏季赛</span><span class="time">2小时17分后</span></div>
                        <div class="ImgBox">
                            <img src="./img/图片 2 Copy 5.png" alt="">
                            <span>vs</span>
                            <img src="./img/图片 Copy 5.png" alt="">
                        </div>
                    </a>
                </div>`
            }
        }
        var index = this.getAttribute('data-index');
        contents[index].style.display = "block"
        this.className = 'tab tabsty'
    })
}