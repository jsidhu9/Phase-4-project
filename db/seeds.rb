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


u1 = User.create(name: 'Jaz', password: "password")
u2 = User.create(name: 'John', password: "password")
u3 = User.create(name:'Alex', password: "password")

d1 = Dentist.create(name: 'Dr. Jazzy Jaz', specialty: 'Root canals')
d2 = Dentist.create(name: 'Dr. John', specialty: 'Braces')
d3 = Dentist.create(name: 'Dr. Alex', specialty: 'Cleaning')

# a1 = Appointment.create(appointment_date_time: "2022-06-01T23:12:12.510Z", user_id: u1.id, dentist_id: d1.id)
# a2 = Appointment.create(date: "Monday, June 1, 2022", time: '9:00am', appointment_type: "Braces Check", duration: 60, user_id: u2.id, dentist_id: d2.id)
# a3 = Appointment.create(date: "Monday, June 1, 2022", time: '10:00am', appointment_type: "Cleaning", duration: 60, user_id: u2.id, dentist_id: d2.id)
# a4 = Appointment.create(date: "Monday, June 1, 2022", time: '11:00am', appointment_type: "Filling", duration: 60, user_id: u3.id, dentist_id: d3.id)

puts "Seeding completed successfully 🌱"