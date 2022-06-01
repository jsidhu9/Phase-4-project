import { useState, useEffect } from "react";
import NewAppointmentForm from './NewAppointmentForm'


const Dentist = ({ currentDentist }) => {

// console.log(currentDentist)

  return (
    <>
      <h2>Make a new appointment with {currentDentist.name}!</h2>
      <h3>{currentDentist.name}'s Specialty: {currentDentist.specialty}</h3>
      <NewAppointmentForm currentDentist={currentDentist}/>
    </>
  );
};

export default Dentist;
