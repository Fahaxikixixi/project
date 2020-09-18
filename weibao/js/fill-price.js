// 点击下一步把数据储存到本地
$('.next').on('click', function () {
  let obj={}
  obj.title = $('.product-name').val()
  obj.client = $('.client').val()
  obj.address = $('.address').val()
  obj.linkman = $('.linkman').val()
  obj.phoneNum = $('.phone-num').val()
  obj.mobile = $('.mobile').val()
  obj.fax = $('.fax').val()
  localStorage.setItem('fill-info',JSON.stringify(obj))
})