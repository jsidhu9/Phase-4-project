import react, {useState} from "react";
import DateTimePicker from "react-datetime-picker";

const NewAppointmentForm = ({ currentDentist }) => {
  const [value, onChange] = useState(new Date());
  const [formData, setFormData] = useState({
      dentist_id: "",
      specialty: "",
      time: "",
      date: "",
      duration: ""
  })

  // here we need something to have dates and times. i'm not totally sure how to do that

//   const apptTimes = ["9am", "10am", "11am", "1pm", "2pm", "3pm", "4pm"]
//   const apptDates = ["June 3, 2022", "June 4, 2022", "June 5, 2022", "June 6, 2022", "June 7, 2022", "June 8, 2022", "June 9, 2022"]
  // maybe an array of appointment times and dates? and we somehow to compare to what's in the DB?

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    // const newAppt = {
    //     dentist_id: currentDentist.id,
    //     time: formData.time,
    //     date: formData.date
    // }
  };

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
    // <form>
    //   <select name={console.log('name')} value={console.log('value')}>
    //     <option>Select a date!</option>
    //     <option>{apptDates.map(date => date)}</option>

    //   </select>
    //   <select name={console.log('name')} value={console.log('value')}>
    //     <option>Select a time!</option>

    //   </select>
    //   <select name={console.log('name')} value={console.log('value')}>
    //     <option>Select a duration!</option>
    //     <option>60 minutes</option>
    //   </select>
    //   <button onSubmit={handleSubmit}>Submit</button>
    // </form>
  );
};

export default NewAppointmentForm;
