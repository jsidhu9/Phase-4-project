import { useNavigate } from "react-router-dom";

const AppointmentItem = ({ appointment, cancelAppt, editApptMode }) => {
  const { dentist, user_id, id, appointment_date_time } = appointment;

  const formattedDate = new Date(appointment_date_time).toLocaleString();

  let navigate = useNavigate();


  const handleDelete = (e) => {
    fetch(`appointments/${appointment.id}`, {
      method: "DELETE",
    });
    cancelAppt(appointment)
  }

  const handleEdit = (e) => {
    editApptMode();
    navigate('/dentist')
  }

  return (
    <div>
      <h3>Dentist: {dentist.name}</h3>
      <h3>Reason: {dentist.specialty}</h3>
      <h3>Date and Time: {formattedDate}</h3>
      <button onClick={handleDelete}>Cancel this appointment</button>
      <button onClick={handleEdit}>Edit This Appointment</button>
    </div>
  );
};

export default AppointmentItem;
