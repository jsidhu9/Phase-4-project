import react from "react";

const NewAppointmentForm = ( { currentDentist } ) => {
    const startHour = 9
    const endHour = 16

    // here we need something to have dates and times. i'm not totally sure how to do that 

    const apptTimes = []
    // maybe an array of appointment times and dates? and we somehow to compare to what's in the DB?

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

  return (
    <form>
        <h2>Make a new appointment with {currentDentist.name}!</h2>
        <h3>{currentDentist.name}'s Specialty: {currentDentist.specialty}</h3>
      <select name={console.log('name')} value={console.log('value')}>
        <option>Select a date!</option>
    
      </select>
      <select name={console.log('name')} value={console.log('value')}>
        <option>Select a time!</option>
        
      </select>
      <select name={console.log('name')} value={console.log('value')}>
        <option>Select a duration!</option>
        
      </select>
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};


export default NewAppointmentForm