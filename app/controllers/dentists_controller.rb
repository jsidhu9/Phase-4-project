class DentistsController < ApplicationController
  # before_action :set_dentist, only: [:show, :update, :destroy]

  # GET /dentists
  def index
    dentists = Dentist.all
    render json: dentists
  end

  def show
    dentist = Dentist.find(params[:id])
    render json: dentist
  end 

 
end
