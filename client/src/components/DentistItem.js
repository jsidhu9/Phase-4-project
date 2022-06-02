
import { useState, useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const DentistItem = ({ dentist, getDentistInfo }) => {
  
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`dentists/${dentist.id}`);
  };

  return (
    <div className="dentist_container">
    <Card sx={{ maxWidth: 200, border: 1 }} className='dentist_card'>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
        {dentist.name}
      </Typography>
      <Typography variant="h5" component="div">
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {dentist.specialty}
    
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handleClick} >View Info</Button>
    </CardActions>
  </Card>
  </div>
  );
};

export default DentistItem;
