import {Link} from "react-router-dom";
import {useState} from "react"

const AppointmentItem = ({ appointment }) => {
    const { dentist, user_id, id, appointment_date_time } = appointment
  console.log(appointment)

  const formattedDate = new Date(appointment_date_time).toLocaleString()
    
    return (
      <div>
        <h3>Dentist: {dentist.name}</h3>
        <h3>Reason: {dentist.specialty}</h3>
        <h3>Date and Time: {formattedDate}</h3>
      </div>      
    );
  }
  
  export default AppointmentItem;