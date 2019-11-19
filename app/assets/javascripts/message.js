$(function(){

  function buildMessage(message){
    image = ( message.image.url) ? `<img src = ${message.image.url} >` : "";
      let html = `<div class = "main_center_thread" data-message-id="${message.id}">
                    <div class ="main_center_thread_upper-message">
                      <div class ="main_center_thread_upper-message_name">
                        ${message.user_name}
                      </div>
                      <div class ="main_center_thread_upper-message_date">
                        ${message.date}
                      </div>
                    </div>
                    <div class = "main_center_thread_lower-message">
                      <p class = "lower-message__content">
                        ${message.content}
                      </p>
                    </div>
                    ${image}
                  </div> `
    $('.main_center').append(html);
  };

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.main_center').append(html);
      $('.main_center').animate({scrollTop: $(".main_center")[0].scrollHeight});
      $(".main_bottom_textbox_text").find(".form__message").val('');
      $(".main_bottom_textbox_img").find(".file").val('');
      $('.form__submit').prop('disabled', false);
      $('form')[0].reset();
    })

    .fail(function(){
      alert('入力エラー:\nメッセージ送信に失敗しました');
    })
    return false;
  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      var last_message_id = $('.main_center_thread:last').data("message-id");
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
        messages.forEach(function (message){
          if (message.id > last_message_id){
            insertHTML = buildMessage(message);  //メッセージが入ったHTMLを取得
            $('.main_center').append(insertHTML);//メッセージを追加
            $('.main_center').animate({scrollTop: $(".main_center")[0].scrollHeight});
          };
        });
      })
      .fail(function() {
        alert('更新エラー:\n自動更新に失敗しました');
      });
    };
  };
  setInterval(reloadMessages, 7000);
});



