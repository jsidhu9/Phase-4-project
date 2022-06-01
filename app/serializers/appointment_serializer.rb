class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :appointment_date_time

  belongs_to :dentist
  belongs_to :user
end
