import AppointmentItem from './AppointmentItem'
// import NewAppointmentForm from './NewAppointmentForm'


const Appointments = ({ appointments }) => {

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