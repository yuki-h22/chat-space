json.(@message, :content, :image)
json.time @message.created_at.strftime("%Y/%m/%d/ %H:%M")
json.user_name @message.user.name
#idもデータとして渡す
json.id @message.id