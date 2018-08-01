json.partial! 'api/guests/guest', guest: @guest

json.gifts(@guest.gifts, :title, :description)

# json.extract!(gift, :title, :description)
