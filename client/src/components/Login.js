import React, { useState } from "react";
import Auth from "./Auth";

function Login({ setUser, setIsAuthenticated }) {
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
      <div className="form">
        <h1>Flatiron Dental</h1>
        <h3 className="u-cf">Returning Patient?</h3>
        <h4>Login below!</h4>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="six columns">
              <label>Username</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Enter username here..."
                id="exampleEmailInput"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="six columns">
              <label>Password</label>
              <input
                className="u-full-width"
                type="text"
                id="exampleEmailInput"
                placeholder="Enter password here..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <input className="button-primary" type="submit" value="Submit" />
        </form>
        {error ? <div>{error}</div> : null}
        <Auth setUser={setUser} setIsAuthenticated={setUser} />
      </div>
    </div>
  );
}

export default Login;
