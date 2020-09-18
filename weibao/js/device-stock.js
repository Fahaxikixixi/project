let [page, pageSize] = [1, 10]
function getDeviceList(page, pageSize) {
  ajax({ url: "device-stock.json", data: { page, pageSize } }, function (res) {
    let { data } = res
    let html=''
    data.forEach(item => {
      html+=`
      <a href="./device-info.html?${item.id}" class="card">
        <div class="card-title">
          <h4>${item.title}</h4>
          <span class="iconfont icon-right"></span>
        </div>
        <p class="card-content">
          <span class="time">库存${item.num}</span>
        </p>
      </a>`
    });
    $('.content').html(html)
  })
}
getDeviceList(page, pageSize)