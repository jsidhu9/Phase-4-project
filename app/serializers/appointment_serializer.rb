class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :duration, :user_id, :dentist_id, :reason_for_visit
end
