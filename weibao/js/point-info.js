let [page, pageSize] = [1, 5];
// 初始化
getPointInfo(page, pageSize)

// ajax({ url: 'api/login', data: { login_uid: 6 } }, function (res) {
//   console.log(res);
// })

// 获取积分明细
function getPointInfo(page, pageSize) {
  ajax({ url: "api/point", data: { page, pageSize } }, function (res) {
    let { data } = res
    let html = ''
    data.forEach(item => {
      html += `
      <div class="item">
        <div class="item-left">
          <p class="item-title">${item.info}</p>
          <p class="time">${item.time}</p>
        </div>
        <div class="item-right">
          <span>${item.num}</span>
        </div>
      </div>`
    });
    $('.info-box').html(html)
  })
}
// 获取积分扣减列表
function getPointReduce(page, pageSize) {
  ajax({ url: "point-info.json", data: { page, pageSize } }, function (res) {
    let { data } = res
    console.log(data);
    let html = ''
    data.forEach(item => {
      html += `
      <div class="item">
        <div class="item-left">
          <p class="item-title">${item.info}</p>
          <p class="time">${item.time}</p>
        </div>
        <div class="item-right">
          <span>${item.num}</span>
          <span class="agree" index="${item.id}" num="${item.num}">同意</span>
        </div>
      </div>
      `
    });
    $('.req-box').html(html)
  })
}

// 切换
$('.tab-wrap>span').on('click', function () {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  if ($(this).attr('tab-id') == '1') {
    $('.info-box').show()
    $('.req-box').hide()
    getPointInfo(page, pageSize)
  }
  if ($(this).attr('tab-id') == '2') {
    $('.info-box').hide()
    $('.req-box').show()
    getPointReduce(page, pageSize)
  }
})

// 显示弹窗
$('.req-box').on('click', ".agree", function () {
  let index = $(this).attr('index')
  let num = $(this).attr('num')
  $('.confirm').attr('index', index)
  $('.confirm').attr('num', num)
  $('.tip-wrap').show()
})

// 确认
$('.confirm').on('click', function () {
  // 拿到当前项的id
  let index = $(this).attr('index')
  let num = $(this).attr('num')
  console.log(index);
  $('.tip-wrap').hide()
  // 点击确定时发送post请求
  ajax({ url: '', method: "post", data: { id: index, num } }, function (res) {
    let { data } = res

  })
  Tip('积分扣减成功')
})
// 取消
$('.cancel').on('click', function () {
  $('.tip-wrap').hide()
})