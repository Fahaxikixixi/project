// (function () {
//   ajax({
//     url: "user-center.json"
//   }, function (res) {
//     let { data } = res
//     // 客户端
//     if (data.role == 0) {
//       $('.user-bottom>.box:first').siblings().remove()
//       $('.content>.item').each((index, item) => {
//         if ($(item).attr("role") != "0") {
//           $(item).remove()
//         }
//       })
//       $('.user-name').text(data.user_name)
//       $('.tx-img').attr('src', data.user_img)
//       $('.point-num').text(data.points)
//     }
//     // 工程师端
//     if (data.role == 1) {
//       $('.content>.item').each((index, item) => {
//         if ($(item).attr("_role") != "1") {
//           $(item).remove()
//         }
//       })
//       $('.user-name').text(data.user_name)
//       $('.tx-img').attr('src', data.user_img)
//       $('.point-num').text(data.points)
//       $('.balance-num').text(data.balance)
//     }
//     // 开发测试时
//     if(data.role==2){
//       return
//     }
//   })
// })()