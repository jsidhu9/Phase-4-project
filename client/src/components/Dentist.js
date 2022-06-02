import { useState, useEffect } from "react";
import NewAppointmentForm from './NewAppointmentForm'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Dentist = ({ currentDentist, user }) => {
  return (
    <Card sx={{minHeight: 500, border: '1px solid',  borderColor: 'primary.main', borderRadius: '16px'}} className="header-container">
    <CardContent  className="dentist_card">
      <h2 id="make-appointment">Make a new appointment with {currentDentist.name}</h2>

      <h3 id="make-appointment">Specialty: {currentDentist.specialty}</h3>
      <NewAppointmentForm currentDentist={currentDentist} user={user}/>
    </CardContent>
    </Card>
  );
};

export default Dentist;
