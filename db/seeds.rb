# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."

puts "Deleting old data..."

Appointment.destroy_all
AppointmentSlot.destroy_all

# u1 = User.create(name: 'Jaz', password: "password")
# u2 = User.create(name: 'John', password: "password")
# u3 = User.create(name:'Alex', password: "password")

#p1 = Patient.create(name: "Phil", password: "password")

#d1 = Dentist.create(name: 'Dr. Jazzy Jaz', specialty: 'Root canals')
#d2 = Dentist.create(name: 'Dr. John', specialty: 'Braces')
#d3 = Dentist.create(name: 'Dr. Alex', specialty: 'Cleaning')

# a1 = Appointment.create(date: "Monday, June 1, 2022", time: '8:00am', duration: 60, patient_id: 7, dentist_id: 59)
# a2 = Appointment.create(date: "Monday, June 1, 2022", time: '9:00am', duration: 60, patient_id: 7, dentist_id: 59)
# a3 = Appointment.create(date: "Monday, June 1, 2022", time: '10:00am', duration: 60, patient_id: 7, dentist_id: 59)
# a4 = Appointment.create(date: "Monday, June 1, 2022", time: '11:00am', duration: 60, patient_id: 7, dentist_id: 59)

puts "Seeding completed successfully 🌱"