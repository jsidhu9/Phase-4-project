class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :duration, :user_id, :dentist_id
end
