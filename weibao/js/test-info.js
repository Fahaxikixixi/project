// 获取传递过来的参数
let paramsId = window.location.search.split('?')[1]
function getTestInfo(id) {
  ajax({ url: 'test-info.json', data: { id } }, function (res) {
    let { data } = res
    $('.card>.title').text(data.test_title)
    $('.card>.tip').text(data.test_info)
    $('.file-name').attr('href', data.test_url)
    $('.file-name').text(data.test_filename)
    switch (data.status) {
      case 0:
        // 未报名
        $('.bm').show()
        $('.bm').siblings().hide()
        break;
      case 1:
        // 已报名，未上传试卷
        $('.scsj').show()
        $('.scsj').siblings().hide()
        break;
      case 2:
        // 已上传试卷,等待批改
        $('.ddpg').show()
        $('.ddpg').siblings().hide()
        break;
      case 3:
        // 得出考试结果
        $('.ddpg').show()
        $('.ddpg').siblings().hide()
        break;
    }
  })
}
getTestInfo(paramsId)


// 点击报名
$('.bm').on('click', function () {
  $('.scsj').show()
  $('.scsj').siblings().hide()
  ajax({ url: '', method: 'post', data: { id: paramsId } }, function (res) {
    let { data } = res
    console.log(data);
  })
})
// 点击上传试卷
$('.scsj').on('click', function () {
  $('.ddpg').show()
  $('.ddpg').siblings().hide()
})