let paramsId = window.location.search.split('?')[1]
let videoArr = JSON.parse(localStorage.getItem('video-arr'))
videoArr.forEach(item => {
  if (item.id == paramsId) {
    $('.title').text(item.video_title)
    $('.video-item').attr('src', item.video_url)
  }
});
