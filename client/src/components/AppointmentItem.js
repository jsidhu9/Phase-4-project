const AppointmentItem = ({ appointment, cancelAppt }) => {
  const { dentist, user_id, id, appointment_date_time } = appointment;

  const formattedDate = new Date(appointment_date_time).toLocaleString();



  const handleDelete = (e) => {
    fetch(`appointments/${appointment.id}`, {
      method: "DELETE",
    });
    cancelAppt(appointment)
  }

  return (
    <div>
      <h3>Dentist: {dentist.name}</h3>
      <h3>Reason: {dentist.specialty}</h3>
      <h3>Date and Time: {formattedDate}</h3>
      <button onClick={handleDelete}>Cancel this appointment</button>
      <button>Edit This Appointment</button>
    </div>
  );
};

export default AppointmentItem;
