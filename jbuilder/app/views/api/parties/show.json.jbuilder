json.partial! 'api/parties/party', party: @party

json.guests(@party.guests, :name, :age, :favorite_color)

json.gifts(@party.guests, :title, :description)
