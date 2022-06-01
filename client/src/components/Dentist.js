import { useState, useEffect } from "react";
import NewAppointmentForm from './NewAppointmentForm'


const Dentist = ({ currentDentist }) => {

// console.log(currentDentist)

  return (
    <>
      <p>{currentDentist.name}</p>
      <p>{currentDentist.specialty}</p>
      <h3>form will go in here!</h3>
      {/* <NewAppointmentForm currentDentist={currentDentist}/> */}
    </>
  );
};

export default Dentist;
