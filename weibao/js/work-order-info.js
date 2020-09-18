// 获取传递过来的参数
let paramsId = window.location.search.split('?')[1]
getOrderInfo(paramsId)
function getOrderInfo(id) {
  ajax({ url: 'work-order-info.json', data: { id } }, function (res) {
    let { data } = res
    console.log(data);
    let btnHtml = `
    <a href="./grade.html?${paramsId}" class="end-serve red-btn">完成服务</a>`
    $('.over-box').html(btnHtml)
    let html = `
    <h2>${data.order_title}</h2>
    <p>描述：${data.info}</p>
    <p>客户：${data.client}</p>
    <p>联系人：${data.linkman}</p>
    <p>联系电话：${data.phoneNum}</p>
    <p>服务地址：${data.address}</p>
    <p>上门时间：${data.time}</p>
    <p>工单价格：${data.price}元</p>
    <p><a class="look-order" href="./look-price.html?${paramsId}">报价单：查看</a></p>`
    $('.content').html(html)
    switch (data.status) {
      // 未接单
      case 0:
        $('.order-received').hide()
        $('.start-serve').hide()
        $('.end-serve').hide()
        break;
      // 已接单
      case 1:
        $('.orders').remove()
        $('.order-received').show()
        $('.start-serve').show()
        $('.end-serve').remove()
        break;
      // 已开始服务
      case 2:
        $('.orders').remove()
        $('.order-received').remove()
        $('.start-serve').remove()
        $('.end-serve').show()
        break;
      // 已完成服务
      case 3:
        $('.orders').remove()
        $('.order-received').remove()
        $('.start-serve').remove()
        $('.end-serve').remove()
        break;
    }
  })
}
// 点击接单
$(".orders").on('click', function () {
  $('.orders').remove()
  $('.order-received').show()
  $('.start-serve').show()
  ajax({ url: '', method: 'post', data: { id: paramsId } }, function (res) {
    let { data } = res
    Tip(data.msg)
  })
})
// 开始服务
$(".start-serve").on('click', function () {
  $('.orders').remove()
  $('.order-received').show()
  $('.start-serve').remove()
  $('.end-serve').show()
  ajax({ url: '', method: 'post', data: { id: paramsId } }, function (res) {
    let { data } = res
    Tip(data.msg)
  })
})