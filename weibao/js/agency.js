// 筛选
$('.picker').on('click', function () {
  let mobileSelect = new MobileSelect({
    trigger: '.picker',
    title: '选择',
    wheels: [
      { data: siteData }
    ],
    onHide: function (id, value) {
      // 避免重复跳出多次picker
      $('.mobileSelect').remove()
      return false
    }
  })
  $(".mobileSelect").addClass('mobileSelect-show')
})

//点击申请代理
$('.submit').on('click', function () {
  let username = $('.name').val()
  let phoneNum = $('.phone-num').val()
  let area = $('.area').text()
  let wxNum = $('.wxcode').val()
  if (!username) {
    return Tip('请输入姓名')
  } else if (!phoneNum){
    return Tip('请输入电话')
  } else if (!area || area =='选择代理地区，选择到市') {
    return Tip('请选择地区')
  } else if (!wxNum) {
    return Tip('请输入微信号')
  }
  if ($('.agree-check').prop("checked")) {
    ajax({ url: '', method: 'post', data: { username, phoneNum, area, wxNum } }, function (res) {
      let { data } = res
      console.log((data));
    })
  } else {
    Tip('请先同意代理协议')
  }
})