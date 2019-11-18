// $(function(){
//   function buildHTML(message){
//      var image = message.image? `<img src = "${message.image}"></img>` :"";
//      var html =
//       `<div class="message" data-message-id="${message.id}">
//          <div class="upper-message">
//            <div class="upper-message__user-name">
//              ${message.user_name}
//            </div>
//            <div class="upper-message__date">
//              ${message.time}
//            </div>
//          </div>
//          <div class="lower-message">
//            <p class="lower-message__content">
//              ${message.content}
//            </p>
//          </div>
//           ${image}
//        </div>`
//      return html;
//  }
// $('#new_comment').on('submit', function(e){
//  e.preventDefault();
//  var formData = new FormData(this);
//  var url = $(this).attr('action')
//  $.ajax({
//    url: url,
//    type: "POST",
//    data: formData,
//    dataType: 'json',
//    processData: false,
//    contentType: false
//  })
//   .done(function(data){
//     var html = buildHTML(data);
//     $('.main_center').append(html);
//     $('form')[0].reset();
//     $('#form__submit').attr('disabled',false);
//     $('.main_center').animate({scrollTop: $('.main_center')[0].scrollHeight}, 'fast');   
//   })
//   .fail(function(){
//     alert("エラー");
//   });
//   return false;
// })
//     var reloadMessages = function(){
//       if (window.location.href.match(/\/groups\/\d+\/messages/)){
//         last_message_id = $('.main_center_thread:last').data("message-id");
//       $.ajax({
//         url:"api/messages",
//         type:'GET',
//         dataType:'json',
//         data:{id:last_message_id}
//       })
//       console.log(last_message_id)
//       .done(function(messages){
//         var insertHTML = '';
//         messages.forEach(function(message){
//           insertHTML = buildHTML(message);
//           $('.main_center_thread').append(insertHTML);
//         })
//         $('.main_center_thread').animate({scrollTop: $(".main_center_thread")[0].scrollHeight});
//       })
//         .fail(function(){
//           alert('error');
//         });
//       }
//     };
//     setInterval(reloadMessages, 7000);
// })