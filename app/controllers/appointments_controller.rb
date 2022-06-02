class AppointmentsController < ApplicationController

  #need full CRUD


  # # GET /appointments
  def index
    appointments = Appointment.all

    render json: appointments
  end

    # GET /appointment/id
    def show
      appointment = Appointment.find_by(id: params[:id])
      render json: appointment
  
    end

  def create
    appointment = Appointment.create!(appointment_params)
    render json: appointment, status: 201
  end

  def update
    appointment = Appointment.find_by(id: params[:id])
    appointment.update!(appointment_params)
    render json: appointment
  end 

  def destroy
    appt = Appointment.find_by(id: params[:id])
    appt.destroy
    head :no_content
  end 

  private

    def appointment_params
      params.permit( :user_id, :dentist_id, :appointment_date_time)
    end
end
