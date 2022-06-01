class DentistsController < ApplicationController
  # before_action :set_dentist, only: [:show, :update, :destroy]

  # GET /dentists
  def index
    dentists = Dentist.all
    render json: dentists
  end

 
end
