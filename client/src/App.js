import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Dentists from "./components/Dentists";
import Home from "./components/Home";
import Dentist from "./components/Dentist";
import Appointments from "./components/Appointments";
import { useNavigate } from "react-router-dom";


function App() {
  const [dentists, setDentists] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const [currentDentist, setCurrentDentist] = useState(null)

  let navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);



  // function onCancelAppointment(id) {
  //   const updatedAppointments = appointments.filter(
  //     (appointment) => appointment.id !== id
  //   );
  //   setAppointments(updatedAppointments);
  // }

  // function handleUpdateAppointment(updatedAppointment) {
  //   const updatedAppointments = appointments.map((appointment) => {
  //     if (appointment.id === updatedAppointment.id) {
  //       return updatedAppointment;
  //     } else {
  //       return appointment;
  //     }
  //   });
  //   setAppointments(updatedAppointments);
  // }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/dentists").then((r) => {
      if (r.ok) {
        r.json().then((dentists) => setDentists(dentists));
      }
    });
  }, []);

  const getDentistInfo = (dentist) => {
    fetch(`/dentists/${dentist.id}`)
      .then((r) => r.json())
      .then((data) => {
        setCurrentDentist(data)
        navigate('/dentist')
      })
  };


  if (!isAuthenticated) {
    return (
      <Login
        error={"please login"}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      />
    );
  }

  return (
    <>
      <Navigation
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
        user={user}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home dentists={dentists} getDentistInfo={getDentistInfo} />}
        />
        <Route
          path="/dentist"
          element={<Dentist currentDentist={currentDentist} />}
        />
        <Route path="/appointments" element={<Appointments appointments={user.appointments}/>} />
        {/* <Route path="/new-appointment" element={<NewAppointmentForm appointments={appointments} user={user} dentists={dentists} />} /> */}
      </Routes>
    </>
  );
}

export default App;
