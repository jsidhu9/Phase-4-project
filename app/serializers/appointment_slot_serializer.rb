class AppointmentSlotSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :duration, :available
end
