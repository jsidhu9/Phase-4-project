import React, { useState } from "react";
import Auth from "./Auth";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Button } from "../styles";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password,
    };

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  }
  return (
    <div>
      
      <h1 className="mainhead">Flatiron Dental</h1>
      <div className="form">
      <Card className='login_card'>

      <h3>Returning Patient?</h3>
      <br/>
      <h4>Login below!</h4>
      <br/>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username here..."
            id="exampleEmailInput"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="exampleEmailInput"
            placeholder="Enter password here..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Log in" />
      </form>
       </Card>
       {/* <Card className='login_card'>

      {error ? <div>{error}</div> : null}
      <Auth setUser={setUser} setIsAuthenticated={setUser} />
      </Card>. */}
    </div>
   
    </div>
  );
};

export default Login;
