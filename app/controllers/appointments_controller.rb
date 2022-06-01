class AppointmentsController < ApplicationController

  #need full CRUD


  # # GET /appointments
  def index
    appointments = Appointment.all

    render json: appointments
  end

  private

    def appointment_params
      params.permit(:date, :time, :duration, :user_id, :dentist_id, :appointment_type)
    end
end
