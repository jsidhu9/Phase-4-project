import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

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
        res.json().then((json) => setError(json.errors));
      }
    });
  }
  return (
    <div>
      <Card className='login_card'>
        <CardContent>
          <h2>User Login</h2>
        </CardContent>
        <CardActions>
          <form onSubmit={onSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username here..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password </label>
              <input
                type="password"
                placeholder="Enter password here..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" value="Log in">Login</Button>
          </form>
          <h3>{error}</h3>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
