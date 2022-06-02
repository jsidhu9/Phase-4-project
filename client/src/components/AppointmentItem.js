import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AppointmentItem = ({ appointment }) => {
  const { dentist, user_id, id, appointment_date_time } = appointment;
  console.log(appointment);

  const formattedDate = new Date(appointment_date_time).toLocaleString();

  return (
    <div className="dentist_container">
    <Card sx={{ maxWidth: 400, border: 1 }} className='visit_container' >
      <h3 className='visit_container'>Dentist: {dentist.name}</h3>
      <h3>Reason: {dentist.specialty}</h3>
      <h3>Date and Time: {formattedDate}</h3>
      <Button small>Cancel Appointment</Button>
      <Button small>Change Appointment</Button>
    </Card>  
    </div>
  );
};

export default AppointmentItem;
