import react, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const NewAppointmentForm = ({ currentDentist, user }) => {
  const [value, onChange] = useState(new Date());
//   const [apptBooked, setApptBooked] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    // console.log(user.id);
    // console.log(currentDentist.id);

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
        //   setApptBooked(true)
        });
      } else {
        res.json().then((json) => console.log("wrong"));
      }
    });
  };

  return (
    <>
    <div>
      <DateTimePicker onChange={onChange} value={value} />
      <button onClick={handleSubmit}>Book</button>
    </div>
    {/* <h3>{apptBooked ? <p>Success! Your appointment has been booked!</p> : null}</h3> */}
    </>
  );
};

export default NewAppointmentForm;
