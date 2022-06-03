
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
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
    navigate(`/edit-appointment/${id}`)
  }

  return (
    <div className="dentist_container">
      <Card sx={{ maxWidth: 400, border: 1 }} className='visit_container' >
        <h3 className='visit_container'>Dentist: {dentist.name}</h3>
        <h3>Reason: {dentist.specialty}</h3>
        <h3>Date and Time: {formattedDate}</h3>
        <Button small onClick={handleDelete} >Cancel Appointment</Button>
        <Button small onClick={handleEdit} >Change Appointment</Button>
      </Card>  
    </div>
  );
};

export default AppointmentItem;
