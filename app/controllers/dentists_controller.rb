class DentistsController < ApplicationController
  def index 
      render json: Dentist.all
  end 

  # GET "/users/:id"
  def show
      dentist = Dentist.find_by(params[:id])
      render json: dentist
  end 

end