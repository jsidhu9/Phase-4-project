import React, { useState } from "react";
import Auth from "./Auth";
// import { Button } from "../styles";


const Login = ({ setUser, setIsAuthenticated }) => {
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
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  }
  return (
    <div className="mainhead">
        <h1>Flatiron Dental</h1>
        <h3>Returning Patient?</h3>
        <h4>Login below!</h4>
        <form onSubmit={onSubmit}>
            <div >
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username here..."
                id="exampleEmailInput"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div >
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
        {error ? <div>{error}</div> : null}
        <Auth setUser={setUser} setIsAuthenticated={setUser} />
    </div>
  );
}

export default Login;
