import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link, Router, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Dentists from "./components/Dentists";
import Home from "./components/Home";
import Appointments from "./components/Appointments";

function App() {
  // const [dentists, setDentists] = useState([])

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // function handleRenderDentists(data){
  //   setDentists(data)
  // }

  function onCancelAppointment(id) {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
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

  // useEffect(() => {
  //   fetch('/me')
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json()
  //       .then((user) => {
  //         setIsAuthenticated(true);
  //         setUser(user);
  //       });

  //     }
  //   });

  //   fetch('/dentists')
  //   .then(res => res.json())
  //   // .then(handleRenderDentists);
  //   .then(data => console.log(data))
  // },[]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handlePost(obj) {
    fetch("/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments([...appointments, data]);
      });
  }

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
    // <Navigation
    //        setIsAuthenticated={setIsAuthenticated}
    //        setUser={setUser}
    //        user={user}
    //       />

    <div>
      <Navigation
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
        user={user}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      {/* <Routes>
        <Route exact path="/">
            <Home />
        </Route> */}
      {/* <Route path="/dentists"/>
          <Dentists 
            // dentists={dentists} 
            user={user} 
            // handlePost={handlePost}
          />
        <Route/> */}
      {/* <Route path="/appointments">
          <Appointments 
              user={user} 
              // onCancelAppointment={onCancelAppointment} 
              // onUpdateAppointment={handleUpdateAppointment}
          />
        </Route> */}
      {/* <Route exact path="/signup">
          <Auth />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>  */}

      {/* </Routes> */}
    </div>
  );
}

export default App;
