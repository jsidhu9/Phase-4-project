class User < ApplicationRecord
    has_many :appointments
    has_many :dentists, through: :appointments
    
    has_secure_password
    validates :name, presence: true, uniqueness: true
end
