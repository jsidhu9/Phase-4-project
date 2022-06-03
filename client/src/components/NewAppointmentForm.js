import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Button from '@mui/material/Button';


const NewAppointmentForm = ({ action, defaultValue }) => {
  const [value, onChange] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    action(value);
  };

  return (
    <div className="appointment-container">
      <DateTimePicker  onChange={onChange} value={value} />
      <Button size="small" onClick={handleSubmit} >Schedule Appointment</Button>
    </div>
  );
};

export default NewAppointmentForm;
