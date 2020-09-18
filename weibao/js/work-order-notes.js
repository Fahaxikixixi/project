// 获取上个月的年月
var nowDate = new Date();
var year = nowDate.getFullYear();
var month = nowDate.getMonth();
// 进入页面默认获取上个月工单记录
getOrderNotes(year, month)

// 获取工单记录列表
function getOrderNotes(year, month) {
  ajax({ url: "work-order-notes.json", data: { year, month } }, function (res) {
    let { data } = res
    console.log(data);
    let totalHtml = `
      <p>该月完成工单数量：${data.num}单</p>
      <p>该月工单结算金额：${data.money}元</p>
    `
    let contentHtml = ''
    data.order_arr.forEach(item => {
      contentHtml += `
      <a href="./work-order-info.html?${item.id}" class="card">
        <div class="card-title">
          <h4>${item.title}</h4>
          <span class="iconfont icon-right"></span>
        </div>
        <p class="card-content">
          <span class="time">${item.time}<span class="isok">${item.finish ? "已完成" : "未完成"}</span></span>
        </p>
      </a>
      `
    });
    $('.statistics').html(totalHtml)
    $('.content').html(contentHtml)
  })
}
// 筛选
$('.date-time').on('click', function () {
  let mobileSelect = new MobileSelect({
    trigger: '.date-time',
    title: '选择年月',
    connector: '-',
    // triggerDisplayData: false,
    wheels: [
      { data: dateData }
    ],
    onHide: function (id, value) {
      // 避免重复跳出多次picker
      $('.mobileSelect').remove()
      return false
    }
  })
  $(".mobileSelect").addClass('mobileSelect-show')
  return false
})
