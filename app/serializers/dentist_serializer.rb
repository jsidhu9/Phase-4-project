class DentistSerializer < ActiveModel::Serializer
  attributes :id:name, :specialty, :photo

  has_many :appointment_slots
end
