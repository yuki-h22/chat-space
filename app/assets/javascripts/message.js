$(function(){



  function buildMessage(post){
    var html = `<div class="main_center_thread">
                  <div class="main_center_thread_upper-message">
                    <div class="main_center_thread_upper-message_name">
                      ${post.user_name}
                    </div>
                    <div class="main_center_thread_upper-message_date">
                      ${post.updated_at}
                    </div>
                  </div>
                  <div class="main_center_thread_lower-message">
                    <p class="lower-message__content">
                      ${post.content}
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
      $('.form__message').val('');
    })
    .fail(function(post){
    
    })
  })
});


