class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
      t.integer :duration
      t.integer :user_id
      t.integer :dentist_id
      
      t.timestamps
    end
  end
end
