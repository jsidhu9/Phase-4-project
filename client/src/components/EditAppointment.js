import NewAppointmentForm from "./NewAppointmentForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditAppointment = () => {
  const [currentAppointment, setcurrentAppointment] = useState(null);
  const appointment = useParams();

  useEffect(() => {
    fetch(`/appointments/${appointment.id}`).then((r) => {
      if (r.ok) {
        r.json().then((a) => setcurrentAppointment(a));
      }
    });
  }, []);

  const editAppointment = (value) => {
    fetch(`/appointments/${appointment.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appointment_date_time: value}),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("success");
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
      <h2>Edit your appointment!</h2>
      <NewAppointmentForm action={editAppointment}/>
    </>
  );
};

export default EditAppointment;
