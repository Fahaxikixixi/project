// 这个页面单独适配
/* rem适配 */
(function () {
  let html = document.documentElement;
  let hw = html.getBoundingClientRect().width;
  if (hw <= 750) {
    html.style.fontSize = hw / 25 + 'px';
  }
  else {
    // 适配PC端
    hw = 750
    document.body.style.cssText = "width:750px;margin:0 auto"
    html.style.fontSize = hw / 25 + 'px';
  }
})()
let baseURL = '../JSON/'
function ajax(obj, callback) {
  $.ajax({
    type: obj.method,
    url: baseURL + obj.url,
    data: obj.data,
    success: (data) => {
      callback(data);
    },
    error: function (err) {
      console.log(err);
    }
  })
}

// 获取证书信息
function getUserInfo(id) {
  ajax({ url: 'my-certificate.json', data: { id } }, function (res) {
    let { data } = res
    console.log(res);
    let html = `
    <h2 class="zs-title">${data.title}</h2>
    <p class="item">姓名<span>${data.name}</span></p>
    <p class="item">性别<span>${data.sex}</span></p>
    <p class="item">等级<span>${data.lv}</span></p>
    <p class="item">专业<span>${data.marjor}</span></p>
    <p class="item-right item">发证机关<span>${data.issuer}</span></p>
    <p class="item-right item">认证单位<span>${data.authenticator}</span></p>
    <img src="${data.user_img}" class="zs-tx">`
    $('.zs-content').html(html)
  })
}
getUserInfo(1)