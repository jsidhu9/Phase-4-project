import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DentistItem = ({ dentist, getDentistInfo }) => {
  const handleClick = () => {
    getDentistInfo(dentist);
  };

  return (
    <>
      <p>{dentist.name}</p>
      <p>{dentist.speciality}</p>
      <button onClick={handleClick}>View Info</button>
    </>
  );
};

export default DentistItem;
