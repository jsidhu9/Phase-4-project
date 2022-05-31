class Dentist < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    has_many :appointment_slots
end
