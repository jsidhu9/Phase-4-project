class AppointmentSlotsController < ApplicationController

  def index
      render json: AppointmentSlot.all
  end
  def show
      appointment_slot = AppointmentSlot.find_by(id: params[:id])
      render json: appointment_slot
  end
end