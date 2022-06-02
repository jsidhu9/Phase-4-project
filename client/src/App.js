import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dentist from "./components/Dentist";
import Appointments from "./components/Appointments";
import EditAppointment from './components/EditAppointment'
import { useNavigate, useParams } from "react-router-dom";



const App = () => {
  const [dentists, setDentists] = useState([]);

  const [user, setUser] = useState(null);

  // const [currentDentist, setCurrentDentist] = useState(null)

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

  // const getDentistInfo = (dentist) => {
  //   // fetch(`/dentists/${dentist.id}`)
  //   //   .then((r) => r.json())
  //   //   .then((data) => {
  //   //     setCurrentDentist(data)
  //   //     navigate('/dentist')
  //   //   })
  //   setCurrentDentist(dentist)
  //   navigate(`/dentist/${dentist.id}`)
  // };

  const editApptMode = () => {
    if(!isEdit)
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
          element={<Home dentists={dentists} />}
        />
        <Route
          path='/dentists/:id'
          element={<Dentist user={user} isEdit={isEdit} setIsEdit={setIsEdit}/>}
        />
        <Route path="/appointments" element={<Appointments appointments={user.appointments} editApptMode={editApptMode}/>} />
        <Route path="edit-appointment/:id" element={<EditAppointment />} />
      </Routes>
    </>
  );
}

export default App;
