class AppointmentsController < ApplicationController
    
  def index
      render json: Appointment.all
  end

  def show
      appointment = Appointment.find_by(id: params[:id])
      render json: appointment
  end

  def update
      appointment = Appointment.find(params[:id])
      if appointment
          appointment.update!( appointment_params )
          render json: appointment
      else
          render json: {error: "Appointment not found"}, status: :not_found
      end
  end

    
  def create
      appointment = Appointment.create!(appointment_params)
      render json: appointment.activity, status: :created
  end
  def destroy
      appointment = Appointment.find(params[:id])
      appointment.destroy
      head :no_content
  end
private
  def appointment_params
      params.permit(:date, :time, :duration, :user_id, :dentist_id, :reason_for_visit )
  end
end