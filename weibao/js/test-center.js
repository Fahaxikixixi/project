// 获取考试列表
function getTestList(classifyId) {
  ajax({ url: "test-center.json", data: { classifyId } }, function (res) {
    let { data } = res
    console.log(data);
    let tab1Html = ''
    data.forEach(item => {
      tab1Html += `
      <a href="./test-info.html?${item.id}" class="card">
        <div class="card-title">
          <h4>${item.title}</h4>
          <span class="iconfont icon-right"></span>
        </div>
      </a>`
    });
    switch (classifyId) {
      case 0:
        $('.tab1').html(tab1Html)
        break;
      case 1:
        $('.tab2').html(tab1Html)
        break;
      case 2:
        $('.tab3').html(tab1Html)
        break;
      case 3:
        $('.tab4').html(tab1Html)
        break;
    }
  })
}
getTestList(0)
// 切换
$('.tab-wrap>span').on('click', function () {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  switch ($(this).attr('tab-id')) {
    case '0':
      $('.tab1').siblings().hide()
      $('.tab1').show()
      getTestList(0)
      break;
    case '1':
      $('.tab2').siblings().hide()
      $('.tab2').show()
      getTestList(1)
      break;
    case '2':
      $('.tab3').siblings().hide()
      $('.tab3').show()
      getTestList(2)
      break;
    case '3':
      $('.tab4').siblings().hide()
      $('.tab4').show()
      getTestList(3)
      break;
  }
})

