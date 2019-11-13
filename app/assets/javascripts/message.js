$(function(){



  function buildMessage(post){
    let html = `<div class="main_center_thread">
                  <div class="main_center_thread_upper-message">
                    <div class="main_center_thread_upper-message_name">
                      ${post.user_id}
                    </div>
                    <div class="main_center_thread_upper-message_date">
                      ${post.created_at}
                    </div>
                  </div>
                  <div class="main_center_thread_lower-message">
                    <p class="lower-message__content">
                      ${post.contene}
                    </p>
                  </div>
                </div>`
    return html;
  }



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
    })
    .fail(function(){

    })
  })
});


