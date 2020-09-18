// 获取传递过来的参数
let paramsId = window.location.search.split('?')[1]
// 获取工单信息
let orderInfo = JSON.parse(localStorage.getItem('order_info'))
// 获取设备信息列表
let deviceInfoList = orderInfo.device_arr
// 取到当前设备的信息
let deviceData = []
deviceInfoList.forEach(item => {
  if (item.id == paramsId) {
    deviceData = item
  }
})
$('.device-name').val(deviceData.device_name)
$('.device-type').val(deviceData.device_type)
$('.device-brand').val(deviceData.device_brand)
$('.unit').val(deviceData.unit)
$('.num').val(deviceData.num)
$('.price').val(deviceData.price)
$('.info').val(deviceData.info)

// 点击更新设备
$('.update').on('click', function () {
  orderInfo.device_arr.forEach(item => {
    if (item.id == paramsId) {
      item.device_brand = $('.device-brand').val()
      item.device_name = $('.device-name').val()
      item.device_type = $('.device-type').val()
      item.info = $('.info').val()
      item.num = $('.num').val()
      item.price = $('.price').val()
      item.unit = $('.unit').val()
    }
  })
  console.log(orderInfo);
  ajax({ url: '', method: 'post', data: orderInfo }, function (res) {
    let { data } = res
    console.log(data);
  })
})

