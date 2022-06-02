const AppointmentItem = ({ appointment }) => {
  const { dentist, user_id, id, appointment_date_time } = appointment;
  console.log(appointment);

  const formattedDate = new Date(appointment_date_time).toLocaleString();

  return (
    <div>
      <h3>Dentist: {dentist.name}</h3>
      <h3>Reason: {dentist.specialty}</h3>
      <h3>Date and Time: {formattedDate}</h3>
      <button>Cancel This Appointment</button>
      <button>Edit This Appointment</button>
    </div>
  );
};

export default AppointmentItem;
