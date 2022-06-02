import react, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const NewAppointmentForm = ({ action, defaultValue }) => {
  const [value, onChange] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    action(value);
  };

  return (
    <>
      <div>
        <DateTimePicker onChange={onChange} value={value} />
        <button onClick={handleSubmit}>Book</button>
      </div>
    </>
  );
};

export default NewAppointmentForm;
