import {Link} from "react-router-dom";
import {useState} from "react"

const AppointmentItem = ({ appointment }) => {
    const {date, time, duration, appointment_type, dentist, user_id, id} = appointment
  // how to get the dentist's name?
    
    return (
      <div>
        <h3>{date}</h3>
        <h3>{time}</h3>
        <h3>{duration}</h3>
        <h3>{appointment_type}</h3>
        {/* <h3>{dentist.name}</h3> */}
      </div>      
    );
  }
  
  export default AppointmentItem;