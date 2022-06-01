class AppointmentsController < ApplicationController

  #need full CRUD


  # # GET /appointments
  def index
    appointments = Appointment.all

    render json: appointments
  end

  def create
    appointment = Appointment.create!(appointment_params)
    render json: appointment, status: 201
  end

  private

    def appointment_params
      params.permit( :user_id, :dentist_id, :appointment_date_time)
    end
end
