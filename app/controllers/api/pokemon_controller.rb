class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @items = Item.where("pokemon_id = #{params[:id]}")
    @pokemon = Pokemon.find(params[:id])
    # render json: @pokemon
  end

end
