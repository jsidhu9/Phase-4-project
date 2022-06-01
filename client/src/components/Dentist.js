import { useState, useEffect } from "react";
import NewAppointmentForm from './NewAppointmentForm'


const Dentist = ({ currentDentist }) => {

// console.log(currentDentist)

  return (
    <>
      {/* <p>Book an appointment with {currentDentist.name}!</p> */}
      {/* <p>Speciality: {currentDentist.specialty}</p> */}
      <NewAppointmentForm currentDentist={currentDentist}/>
    </>
  );
};

export default Dentist;
