class CreateAppointmentSlots < ActiveRecord::Migration[6.1]
  def change
    create_table :appointment_slots do |t|
      t.string "date"
      t.string "time"
      t.integer "duration"
      t.boolean "available"
      
      t.timestamps 
    end 
  end
end
