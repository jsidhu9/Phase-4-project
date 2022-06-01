import { useState, useEffect } from 'react'
import AppointmentItem from './AppointmentItem'
// import NewAppointmentForm from './NewAppointmentForm'


const Appointments = ({ user }) => {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch("/myappointments").then((r) => {
      if (r.ok) {
        r.json().then((appts) => setAppointments(appts));
      }
    });
  }, []);
  console.log(appointments)

  const appointmentList = appointments.map((appointment) => (
    <AppointmentItem
      key={appointment.id}
      appointment={appointment}
    />
  ));
   


return (
    <div className="container">
      <h2>My Appointments</h2>
      <div>{appointmentList}</div>
    </div>
   );
}
export default Appointments;