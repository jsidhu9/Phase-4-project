import react, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const NewAppointmentForm = ({ currentDentist, user, isEdit, setIsEdit, action, defaultValue, editAppointment }) => {
  const [value, onChange] = useState(defaultValue);

  const handleSubmit = (e) => {
      e.preventDefault();
      action(value)
  }
//   const [apptBooked, setApptBooked] = useState(false)
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(value);
//     // console.log(user.id);
//     // console.log(currentDentist.id);
//     if (!isEdit) {
//         const newAppointment = {
//             user_id: user.id,
//             dentist_id: currentDentist.id,
//             appointment_date_time: value,
//           };
      
//           fetch("/appointments", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newAppointment),
//           }).then((res) => {
//             if (res.ok) {
//               res.json().then((user) => {
//                 console.log("success");
//               //   setApptBooked(true)
//               });
//             } else {
//               res.json().then((json) => console.log("wrong"));
//             }
//           });
//     } else {
//         fetch(`/appointments`, {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(value),
//           }).then((res) => {
//             if (res.ok) {
//               res.json().then((user) => {
//                 console.log("success");
//                 setIsEdit(false)
//               });
//             } else {
//               res.json().then((json) => console.log("wrong"));
//             }
//           });
//     }
   
//   };

  return (
    <>
    <div>
      <DateTimePicker onChange={onChange} value={value} />
      {/* {isEdit ? <button onClick={handleSubmit}>Edit</button> : <button onClick={handleSubmit}>Book</button>} */}
      <button onClick={handleSubmit}>BUTTON</button>
    </div>
    </>
  );
};

export default NewAppointmentForm;
