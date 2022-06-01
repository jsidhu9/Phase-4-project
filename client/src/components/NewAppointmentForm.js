import react from "react";

const NewAppointmentForm = ( { dentists, appointments } ) => {
    const startHour = 9
    const endHour = 16



    const apptTimes = []


  return (
    <form>
        <h3>Make a new appointment!</h3>
      <select name={console.log('name')} value={console.log('value')}>
        <option>Select your dentist!</option>
        {dentists.map((dentist) => {
          return (
            <>
              <option value={dentist.id} key={dentist.id}>
                {dentist.name}
              </option>
            </>
          );
        })}
      </select>
      <select name={console.log('name')} value={console.log('value')}>
        <option>Select a time!</option>
        {appointments.map((appt) => {
          return (
            <>
              <option value={appt.id} key={appt.id}>
                {appt.time}
              </option>
            </>
          );
        })}
      </select>
      <button>Submit</button>
    </form>
  );
};


export default NewAppointmentForm