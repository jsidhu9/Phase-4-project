class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

    # POST /signup
  def signup 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: 201
  end

  def me
    user = User.find(session[:user_id])
    render json: user, status: :ok
end 

 

  private
    def user_params
      params.permit(:id, :name, :password)
    end
end
