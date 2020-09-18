// 获取传递过来的参数
let paramsId = window.location.search.split('?')[1]
function getDeviceInfo(id) {
  ajax({ url: "device-info.json", data: { id } }, function (res) {
    let { data } = res
    let html = `
    <h1 class="title">${data.title}</h1>
    <p>设备分类：${data.classify} 》${data.subClassify}</p>
    <p>我司库存：${data.num}件</p>
    <p>设备描述：${data.info}</p>
    `
    $('.card').html(html)
    $('.device-img').attr('src', data.img_url)
  })
}
getDeviceInfo(paramsId)