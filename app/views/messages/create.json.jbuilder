json.content @message.content
json.user_id @message.user_id
json.user_name @message.user.name
json.time @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.image @message.image_url
