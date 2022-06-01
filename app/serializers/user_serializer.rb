class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest

  has_many :appointments
  has_many :dentists, through: :appointments
end
