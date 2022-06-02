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



const App = () => {
  const [dentists, setDentists] = useState([]);

  const [user, setUser] = useState(null);

  const [currentDentist, setCurrentDentist] = useState(null)

  const [isEdit, setIsEdit] = useState(false)

  let navigate = useNavigate();


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

  const editApptMode = () => {
    setIsEdit(true)
}

console.log(isEdit)

  if (!user) {
    return (
      <Login
        error={"please login"}
        setUser={setUser}
      />
    );
  }

  return (
    <>
      <Navigation
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
          element={<Dentist currentDentist={currentDentist} user={user}/>}
        />
        <Route path="/appointments" element={<Appointments appointments={user.appointments} editApptMode={editApptMode}/>} />
        {/* <Route path="/new-appointment" element={<NewAppointmentForm appointments={appointments} user={user} dentists={dentists} />} /> */}
      </Routes>
    </>
  );
}

export default App;
