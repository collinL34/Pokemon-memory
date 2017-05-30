
800.times do 
  pok = PokemonGenerator.pokemon()
  Pokemon.find_or_create_by(name: pok[:name], image_link: pok[:image])
end