class DentistSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty

  has_many :appointments
end
