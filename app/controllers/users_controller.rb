class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

    # POST /signup
  def signup 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: 201
  end

  def me
    # check if user is logged in if the session user ID exists 
    # byebug
    user = User.find(session[:user_id])
    render json: user, status: :ok
  end 

  # GET /users
  # def index
  #   users = User.all

  #   render json: users
  # end

  # # GET /users/1
  # def show
  #   user = User.find(session[:user_id])
  #   render json: user, status: :ok
  # end

  # # POST /users
  # def create
  #   @user = User.new(user_params)

  #   if @user.save
  #     render json: @user, status: :created
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:id, :name, :password)
    end
end