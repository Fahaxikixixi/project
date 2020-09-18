let [page, pageSize] = [1, 8]
function getVideoCourse(page, pageSize) {
  ajax({ url: "video-course.json", data: { page, pageSize } }, function (res) {
    let { data } = res
    localStorage.setItem('video-arr', JSON.stringify(data))
    let html = ''
    data.forEach(item => {
      html += `
       <a class="video-item" href="./video-play.html?${item.id}">
        <img src="${item.img_url}" class="video-img">
        <div class="info">
          <p class="video-title">${item.video_title}</p>
          <span class="play-num">${item.num}次播放</span>
        </div>
      </a>`
    });
    $('.video-list').html(html)
  })
}
getVideoCourse(page, pageSize)