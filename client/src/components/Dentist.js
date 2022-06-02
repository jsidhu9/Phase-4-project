import { useState, useEffect } from "react";
import NewAppointmentForm from "./NewAppointmentForm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams, useNavigate } from "react-router-dom";

const Dentist = ({ user, isEdit }) => {
  const [currentDentist, setCurrentDentist] = useState(null);
  const dentist = useParams();
  let navigate = useNavigate();


  useEffect(() => {
    fetch(`/dentists/${dentist.id}`).then((r) => {
      if (r.ok) {
        r.json().then((d) => setCurrentDentist(d));
      }
    });
  }, [dentist.id]);

  const createAppointment = (value) => {
    const newAppointment = {
      user_id: user.id,
      dentist_id: currentDentist.id,
      appointment_date_time: value,
    };

    fetch("/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAppointment),
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

  if (!currentDentist) {
    return <></>;
  }

  return (
    <Card>
      <CardContent sx={{ border: "1px solid" }} className="dentist_card">
        <h2>Make a new appointment with {currentDentist.name}!</h2>
        {
          <h3>
            {currentDentist.name}'s Specialty: {currentDentist.specialty}
          </h3>
        }
        <NewAppointmentForm
          currentDentist={currentDentist}
          user={user}
          isEdit={isEdit}
          action={createAppointment}
          defaultValue={new Date()}
        />
      </CardContent>
    </Card>
  );
};

export default Dentist;
