class PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all.shuffle()
    @pokemon = @pokemon[(0..9)]

    render json: @pokemon
  end
  
end
