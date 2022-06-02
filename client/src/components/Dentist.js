import { useState, useEffect } from "react";
import NewAppointmentForm from './NewAppointmentForm'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Dentist = ({ currentDentist, user }) => {

// console.log(currentDentist)

  return (
    <Card>
    <CardContent sx={{border: '1px solid'}} className="dentist_card">
      <h2>Make a new appointment with {currentDentist.name}!</h2>
      <h3>{currentDentist.name}'s Specialty: {currentDentist.specialty}</h3>
      <NewAppointmentForm currentDentist={currentDentist} user={user}/>
    </CardContent>
    </Card>
  );
};

export default Dentist;
