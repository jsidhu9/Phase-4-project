const AppointmentItem = ({ appointment }) => {
  const { dentist, user_id, id, appointment_date_time } = appointment;

  const formattedDate = new Date(appointment_date_time).toLocaleString();

  const handleClick = (e) => {
    console.log(e.target)
  }

  return (
    <div>
      <h3>Dentist: {dentist.name}</h3>
      <h3>Reason: {dentist.specialty}</h3>
      <h3>Date and Time: {formattedDate}</h3>
      <button onClick={handleClick}>See Appointment Information</button>
      {/* <button>Edit This Appointment</button> */}
    </div>
  );
};

export default AppointmentItem;
