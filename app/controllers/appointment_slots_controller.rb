class AppointmentSlotsController < ApplicationController
  before_action :set_appointment_slot, only: [:show, :update, :destroy]

  # GET /appointment_slots
  def index
    @appointment_slots = AppointmentSlot.all

    render json: @appointment_slots
  end

  # GET /appointment_slots/1
  def show
    render json: @appointment_slot
  end

  # POST /appointment_slots
  def create
    @appointment_slot = AppointmentSlot.new(appointment_slot_params)

    if @appointment_slot.save
      render json: @appointment_slot, status: :created, location: @appointment_slot
    else
      render json: @appointment_slot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointment_slots/1
  def update
    if @appointment_slot.update(appointment_slot_params)
      render json: @appointment_slot
    else
      render json: @appointment_slot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointment_slots/1
  def destroy
    @appointment_slot.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment_slot
      @appointment_slot = AppointmentSlot.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def appointment_slot_params
      params.fetch(:appointment_slot, {})
    end
end
