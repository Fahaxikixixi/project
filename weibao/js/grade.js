let star = 0
// 获取传递过来的参数
let paramsId = window.location.search.split('?')[1]

$('.star-list span').on('click', function () {
  let index = Number($(this).attr('star'))
  star = index
  $('.star-list span').removeClass('icon-caidan_wujiaoxingman')
  $('.star-list span').addClass('icon-caidan_wujiaoxingkong')
  $('.star-list span').each((i, item) => {
    if (i + 1 <= index) {
      $(item).removeClass('icon-caidan_wujiaoxingkong')
      $(item).addClass('icon-caidan_wujiaoxingman')
    }
  })
})
$('.submit').on('click', function () {
  let content = $('.comment-text').val()
  ajax({ url: "", method: 'post', data: { id: paramsId, star, content } }, function (res) {
    let { data } = res
    console.log(data);
  })
})