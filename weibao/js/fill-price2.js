// 获取上一步储存的数据
let obj = JSON.parse(localStorage.getItem('fill-info'))
let deviceObj = {}
let device_arr = []

// 新增设备
function pushDevice() {
  deviceObj.device_name = $('.device_name').val()
  deviceObj.device_type = $('.device_type').val()
  deviceObj.device_brand = $('.device_brand').val()
  deviceObj.unit = $('.unit').val()
  deviceObj.num = $('.num').val()
  deviceObj.price = $('.price').val()
  deviceObj.info = $('.info').val()
  device_arr.push(deviceObj)
  $('.device_name').val('')
  $('.device_type').val('')
  $('.device_brand').val('')
  $('.unit').val('')
  $('.num').val('')
  $('.price').val('')
  $('.info').val('')
}

// 点击继续新增设备
$('.continue').on('click', function (res) {
  pushDevice()
})

// 点击完成报价
$('.finish').on('click', function (res) {
  pushDevice()
  obj.device_arr = device_arr
  console.log(obj);
  ajax({ url: '', method: 'post', data: obj }, function (res) {
    let { data } = res
    console.log(data);
  })
})