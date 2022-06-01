import { useState, useEffect } from "react";

function DentistItem({dentist, user, handlePost}) {

  // i think this just needs to render a dentist item and we have a separate component for creating appointments!
  // we also removed appointment slots from the backend so we will have to change that 
  // we should make each dentist a card with name, speciality and photo (i added photos to the db but not sure if theyre gonna work)



  // const [duration, setDuration] = useState("")
  // const [appointmentOption, setAppointmentOption] = useState("")
  // const [appointmentSlots, setAppointmentSlots] = useState([])
  // const [appointmentSlot, setAppointmentSlot] = useState(null)


  // const id = appointmentOption

  //   useEffect(() => {
  //     fetch("/appointment_slots")
  //       .then((r) => r.json())
  //       .then(setAppointmentSlots);
  //   }, []);
  
  //   useEffect(() => {
  //     fetch(`/appointment_slots/${id}`)
  //       .then((r) => r.json())
  //       .then((appointmentSlot)=>
  //       setAppointmentSlot(appointmentSlot));
  //   }, [id]);

     
  // function onSubmit(e){
  //     e.preventDefault()
      
   
  //     const appointment = {
  //         date: appointmentSlot.date,
  //         time: appointmentSlot.time,
  //         duration: appointmentSlot.duration,
  //         user_id: user.id,
  //         dentist_id: dentist.id

  //     }
  //     handlePost(appointment)
  // } 
    return (
      
          <div>
            <div className="row">
              <div className="four columns">
                <div className="polaroid">
                  <p>{dentist.name}</p>
                  {/* <img className="dentist-img" src={dentist.photo} alt={dentist.name} /> */}
                  <p className="four columns">{dentist.speciality}</p>
                  <div className="container">
                  </div>
                </div>  
              </div>
          
              {/* <NewAppointmentForm dentist={dentist} user={user} handlePost={handlePost}/>  */}
              {/* <form onSubmit={onSubmit} className="four columns">


                <select value={appointmentOption} onChange={(e) => setAppointmentOption(e.target.value)}>
                  <option value="">Select Appointment...</option>
                  {appointmentSlots.map((appointment_slot) => (
                    <option key={appointment_slot.id} value={appointment_slot.id}>
                      {appointment_slot.date} @ {appointment_slot.time}
                    </option>
                  ))}

                </select>

                <input type="submit" value="Schedule Appointment" />
              </form> */}
            </div>
          </div>
        
    )
}
  
  export default DentistItem;