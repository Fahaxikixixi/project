// 获取传递过来的参数
let paramsId = window.location.search.split('?')[1]

// 储存工单信息
let orderInfo = {}
function getPriceOrder(id) {
  ajax({ url: "look-price.json", data: { id } }, function (res) {
    let { data } = res
    orderInfo = data
    console.log(data);
    $('.prod-name').val(data.title)
    $('.client-name').val(data.client)
    $('.address').val(data.address)
    $('.linkman').val(data.linkman)
    $('.phone-num').val(data.phoneNum)
    $('.mobile').val(data.mobile)
    $('.fax').val(data.fax)
    $('.mobile').val(data.mobile)
    let html = ''
    data.device_arr.forEach(item => {
      html += `
      <a class="option" href="./check-order-device-info.html?${item.id}">
        <span class="option-title">${item.device_name}</span>
        <span class="iconfont icon-right"></span>
      </a>`
    });
    $('.devive-list-box').html(html)
    $('.status').text(data.status == 0 ? "正在审核" : "已通过审核")
    // 将工单信息存到本地
    localStorage.setItem('order_info', JSON.stringify(data))
  })
}
getPriceOrder(paramsId)

// 点击更新
$('.update').on('click', function () {
  console.log(orderInfo);
  orderInfo.address = $('.address').val()
  orderInfo.client = $('.client-name').val()
  orderInfo.fax = $('.fax').val()
  orderInfo.linkman = $('.linkman').val()
  orderInfo.mobile = $('.mobile').val()
  orderInfo.phoneNum = $('.phone-num').val()
  orderInfo.title = $('.prod-name').val()
  ajax({ url: '', method: 'post', data: orderInfo }, function (res) {
    let { data } = res
    console.log(data);
  })
})