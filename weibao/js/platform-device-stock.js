let [page, pageSize] = [1, 5]
// 筛选分页
let [classifyPage, classifyPageSize] = [1, 5]
// 搜索分页
let [searchPage, searchPageSize] = [1, 5]
let classifyData = []
// 获取设备分类
function getDeviceClassify() {
  ajax({ url: "device-classify.json" }, function (res) {
    let { data } = res
    classifyData = data
  })
}
// 获取设备列表
function getDeviceList(page, pageSize, keyword, classify, subClassify) {
  ajax({ url: "platform-device-stock.json", data: { page, pageSize, keyword, classify, subClassify } }, function (res) {
    let { data } = res
    let html = ''
    console.log(data);
    data.forEach(item => {
      html += `
      <div class="card">
        <a href="./device-info.html?${item.id}" class="card-title">
          <h4>${item.title}</h4>
          <span class="iconfont icon-right"></span>
        </a>
        <a class="card-content">
          <span class="time">平台库存:${item.num}</span>
          <span class="add-stock" device-id="${item.id}">加入我司库</span>
        </a>
      </div>`
    });
    $('.content').html(html)
  })
}
getDeviceClassify()
getDeviceList(page, pageSize)

// 筛选
$('.icon-shaixuan').on('click', function () {
  let mobileSelect = new MobileSelect({
    trigger: '.icon-shaixuan',
    title: '选择',
    triggerDisplayData: false,
    wheels: [
      { data: classifyData }
    ],
    onHide: function (id, value) {
      // 避免重复跳出多次picker
      $('.mobileSelect').remove()
      return false
    },
    callback(id, value) {
      console.log(id, value);
      let classify = value[0].value
      let subClassify = value[1].value
      getDeviceList(classifyPage, classifyPageSize,classify,subClassify)
    }
  })

  $(".mobileSelect").addClass('mobileSelect-show')
})

// 搜索
$('.search-btn').on('click', function (res) {
  let keyword = $('.search-text').val()
  getDeviceList(searchPage, searchPageSize, keyword)
})

// 储存点击加入我司库时对应的设备id
let deviceId = 0
// 点击加入我司库
$('.content').on('click', '.add-stock', function () {
  $('.alert-wrap').show()
  deviceId = Number($(this).attr('device-id'))
})
// 确定
$('.confirm').on('click', function () {
  $('.alert-wrap').hide()
  let num = Number($('.alert-text').val())
  ajax({ url: '', method: 'post', data: { id: deviceId, num } }, function (res) {
    let { data } = res
    console.log(data);
  })
})
// 取消
$('.cancel').on('click', function () {
  $('.alert-wrap').hide()
})