class PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all.shuffle()
    @pokemon = @pokemon[(0..9)]
    pok_clone = @pokemon.shuffle()
    @pokemon << pok_clone
    @pokemon.shuffle()

    render json: @pokemon
  end
  
end
