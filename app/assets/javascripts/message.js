$(function(){
  function buildMessage(post){
    image = ( post.image ) ? `<img src=${post.image} >` : "";
      let html = `<div class = "main_center_thread">
                    <div class ="main_center_thread_upper-message">
                      <div class ="main_center_thread_upper-message_name">
                        ${post.user_name}
                      </div>
                      <div class ="main_center_thread_upper-message_date">
                        ${post.time}
                      </div>
                    </div>
                    <div class = "main_center_thread_lower-message">
                      <p class = "lower-message__content">
                        ${post.content}
                      </p>
                    </div>
                      ${image}
                  </div> `
    return html
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
    .done(function(post){
      var html = buildMessage(post);
      $('.main_center').append(html);
      $('.main_center').animate({scrollTop: $(".main_center")[0].scrollHeight});
      $('form')[0].reset();
    })

    .fail(function(){
      alert('入力エラー:\nメッセージが入力されていません');
    })
    return false;
  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.main_center_thread:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        //追加するHTMLの入れ物を作る
        var insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        messages.forEach(function (message){
          insertHTML = buildMessage(message);  //メッセージが入ったHTMLを取得
          $('.main_center').append(insertHTML);//メッセージを追加
        })
        $('.main_center').animate({scrollTop: $(".main_center")[0].scrollHeight});
      })
      .fail(function() {
        alert('更新エラー:\n自動更新に失敗しました');
      });
    };
  };
  setInterval(reloadMessages, 7000);
});



