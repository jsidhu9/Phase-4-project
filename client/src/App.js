import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Auth from './components/Auth'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Dentists from  "./components/Dentists"
import Home from "./components/Home"
import Appointments from "./components/Appointments"

function App() {
  const [dentists, setDentists] = useState([])


  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [appointments, setAppointments] = useState([])

  function handleRenderDentists(data){
    setDentists(data)
  }
  function onCancelAppointment(id) {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(updatedAppointments);
  }
  function handleUpdateAppointment(updatedAppointment) {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === updatedAppointment.id) {
        return updatedAppointment;
      } else {
        return appointment;
      }
    });
    setAppointments(updatedAppointments);
  }

  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      
      }
    });
  
  
    fetch('/dentists')
    .then(res => res.json())
    .then(handleRenderDentists);

  },[]);

  function handlePost(obj){
    fetch('/appointments',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then (res => res.json())
    .then(data => {setAppointments([...appointments,data])})
}
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  return (
    <div>
    <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/dentists" element={<Dentists dentists={dentists} user={user} handlePost={handlePost}/>} />
    <Route path="/appointments" element={<Appointments user={user} onCancelAppointment={onCancelAppointment} onUpdateAppointment={handleUpdateAppointment}/>} />

    
    {/* <Route exact path="/signup" element={<Auth/>} />
    <Route exact path="/login" element={<Login/>} /> */}
     
    </Routes>
  </div>
  );
}

export default App;