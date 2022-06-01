class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :duration, :user_id

  belongs_to :dentist
  belongs_to :user
end
