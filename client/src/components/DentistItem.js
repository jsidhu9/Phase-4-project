// import {Link} from "react-router-dom";
// import { useState, useEffect } from "react";
// // import NewAppointmentForm from './NewAppointmentForm'

// function DentistItem({dentist, user, handlePost}) {
//   const [duration, setDuration] = useState("")
//   const [appointmentOption, setAppointmentOption] = useState("")
//   const [appointmentSlots, setAppointmentSlots] = useState([])
//   const [appointmentSlot, setAppointmentSlot] = useState(null)


//   const id = appointmentOption

//     useEffect(() => {
//       fetch("/appointment_slots")
//         .then((r) => r.json())
//         .then(setAppointmentSlots);
//     }, []);
  
//     useEffect(() => {
//       fetch(`/appointment_slots/${id}`)
//         .then((r) => r.json())
//         .then((appointmentSlot)=>
//         setAppointmentSlot(appointmentSlot));
//     }, [id]);

     
//   function onSubmit(e){
//       e.preventDefault()
      
   
//       const appointment = {
//           date: appointmentSlot.date,
//           time: appointmentSlot.time,
//           duration: appointmentSlot.duration,
//           user_id: user.id,
//           dentist_id: dentist.id

//       }
//       handlePost(appointment)
//   } 
//     return (
      
      
//           <div>
//             <div className="row">
//               <div className="four columns">
//                 <div className="polaroid">
//                   <p>{dentist.name}</p>
//                   <img className="dentist-img" src={dentist.photo} alt={dentist.name} />
//                   <div className="container">
//                   </div>
//                 </div>  
//               </div>
//               <p className="four columns"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>

//               {/* <NewAppointmentForm dentist={dentist} user={user} handlePost={handlePost}/>  */}
//               <form onSubmit={onSubmit} className="four columns">


//                 <select value={appointmentOption} onChange={(e) => setAppointmentOption(e.target.value)}>
//                   <option value="">Select Appointment...</option>
//                   {appointmentSlots.map((appointment_slot) => (
//                     <option key={appointment_slot.id} value={appointment_slot.id}>
//                       {appointment_slot.date} @ {appointment_slot.time}
//                     </option>
//                   ))}

//                 </select>

//                 <input type="submit" value="Schedule Appointment" />
//               </form>
//             </div>
//           </div>
        
//     )
// }
  
//   export default DentistItem;