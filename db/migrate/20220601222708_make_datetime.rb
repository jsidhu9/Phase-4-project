class MakeDatetime < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :appointment_date_time, :datetime
  end
end
