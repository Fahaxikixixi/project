let [page, pageSize] = [1, 10]
getBalanceInfo(page, pageSize)
// 获取余额明细
function getBalanceInfo(page, pageSize) {
  ajax({ url: "balance-info.json", data: { page, pageSize } }, function (res) {
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
// 切换
$('.tab-wrap>span').on('click', function () {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  if ($(this).attr('tab-id') == '1') {
    $('.info-box').show()
    $('.widthdraw').hide()
  }
  if ($(this).attr('tab-id') == '2') {
    $('.info-box').hide()
    $('.widthdraw').show()
  }
})