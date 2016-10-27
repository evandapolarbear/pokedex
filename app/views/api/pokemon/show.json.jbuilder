json.id @pokemon.id
json.attack @pokemon.attack
json.defense @pokemon.defense
json.image_url "../../../assets/images/pokemon_snaps/#{@pokemon.id}.png"
json.moves @pokemon.moves
json.poke_type @pokemon.poke_type

json.items @items
