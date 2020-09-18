/* rem适配 */
(function () {
  let html = document.documentElement;
  let hw = html.getBoundingClientRect().width;
  // console.log(hw);
  /* 
  设计稿width=375px
  25rem=375px
  1rem=15px
  */
  if (hw <= 750) {
    html.style.fontSize = hw / 25 + 'px';
  }
})()

let baseURL = 'http://api.weibao.com/';
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

// 提示组件
function Tip(msg) {
  // 创建提示节点
  let box = document.createElement('p')
  box.className = 'msg-info'
  document.body.appendChild(box)
  $('.msg-info').text(msg)
  $('.msg-info').show(function () {
    setTimeout(function () {
      $('.msg-info').hide()
      // 销毁提示节点
      document.body.removeChild(box)
    }, 2000)
  })
}