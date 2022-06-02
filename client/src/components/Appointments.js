import { useState, useEffect } from "react";
import AppointmentItem from "./AppointmentItem";

const Appointments = ({ user }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/myappointments").then((r) => {
      if (r.ok) {
        r.json().then((appts) => setAppointments(appts));
      }
    });
  }, []);

  const cancelAppt = (appointment) => {
    const oneLess = appointments.filter((appt) => appointment.id !== appt.id)
    setAppointments(oneLess)
  }

  const appointmentList = appointments.map((appointment) => (
    <AppointmentItem key={appointment.id} appointment={appointment} setAppointments={setAppointments} cancelAppt={cancelAppt} />
  ));

  return (
    <div className="container">
      <h2>My Appointments</h2>
      <div>{appointmentList}</div>
    </div>
  );
};
export default Appointments;
