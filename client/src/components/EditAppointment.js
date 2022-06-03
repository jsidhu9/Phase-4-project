import NewAppointmentForm from "./NewAppointmentForm";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const EditAppointment = () => {
  const [currentAppointment, setcurrentAppointment] = useState(null);
  const appointment = useParams();
  let navigate = useNavigate();


  useEffect(() => {
    fetch(`/appointments/${appointment.id}`).then((r) => {
      if (r.ok) {
        r.json().then((a) => setcurrentAppointment(a));
      }
    });
  }, [appointment.id]);

  const editAppointment = (value) => {
    fetch(`/appointments/${appointment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appointment_date_time: value }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("success");
          navigate('/appointments')
        });
      } else {
        res.json().then((json) => console.log("wrong"));
      }
    });
  };

  if (!currentAppointment) {
    return <></>;
  }

  return (
    <>
      <Card sx={{minHeight: 500, border: '1px solid',  borderColor: 'primary.main', borderRadius: '16px'}}>
        <CardContent>
          <div className="header-container" >
            <h2>Edit your appointment</h2>
          </div>
          <NewAppointmentForm action={editAppointment}/>
        </CardContent>
      </Card>
    </>
  );
};

export default EditAppointment;
