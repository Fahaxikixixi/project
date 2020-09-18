// 设置当前页，和一页多少条数据
let [page, pageSize] = [1, 5]

getUntreated(page, pageSize, 0)
// 获取未处理工单
function getUntreated(page, pageSize, classifyId) {
  ajax({ url: "untreated_order.json", data: { page, pageSize, classifyId } }, function (res) {
    let { data } = res
    let html=''
    data.forEach(item => {
      html+=`
      <div class="card">
        <a href="./work-order-info.html?id=${item.id}" class="card-title">
          <h4>${item.title}</h4>
          <span class="iconfont icon-right"></span>
        </a>
        <a href="./look-price.html" class="card-content">
          <span class="time">${item.time}</span>
          <span>${item.has_order?'有报价单':'无报价单'}</span>
        </a>
      </div>`
    });
    switch (classifyId) {
      case 0:
        $('.tab1').html(html)
        break;
      case 1:
        $('.tab2').html(html)
        break;
      case 2:
        $('.tab3').html(html)
        break;
      case 3:
        $('.tab4').html(html)
        break;
      case 4:
        $('.tab5').html(html)
        break;
    }
  })
}

// 切换
$('.tab-wrap>span').on('click', function () {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  switch ($(this).attr('tab-id')) {
    case '0':
      $('.tab1').siblings().hide()
      $('.tab1').show()
      getUntreated(page, pageSize, 0)
      break;
    case '1':
      $('.tab2').siblings().hide()
      $('.tab2').show()
      getUntreated(page, pageSize, 1)
      break;
    case '2':
      $('.tab3').siblings().hide()
      $('.tab3').show()
      getUntreated(page, pageSize, 2)
      break;
    case '3':
      $('.tab4').siblings().hide()
      $('.tab4').show()
      getUntreated(page, pageSize, 3)
      break;
    case '4':
      $('.tab5').siblings().hide()
      $('.tab5').show()
      getUntreated(page, pageSize, 4)
      break;
  }
})