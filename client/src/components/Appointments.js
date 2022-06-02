import { useState, useEffect } from "react";
import AppointmentItem from "./AppointmentItem";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import NewAppointmentForm from './NewAppointmentForm'

const Appointments = ({ user }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/myappointments").then((r) => {
      if (r.ok) {
        r.json().then((appts) => setAppointments(appts));
      }
    });
  }, []);
  console.log(appointments);

  const appointmentList = appointments.map((appointment) => (
    <AppointmentItem key={appointment.id} appointment={appointment} />
  ));

  return (
    <Card sx={{minHeight: 500, border: '1px solid',  borderColor: 'primary.main', borderRadius: '16px'}}>
    <CardContent>
    <div className="header-container" >
      <h2>My Appointments</h2>
      </div>
      <div id="make-appointment">
      {appointmentList}
      </div>
      </CardContent>
    </Card>
  );
};
export default Appointments;
