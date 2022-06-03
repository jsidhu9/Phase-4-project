import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Auth = ({ setUser, setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      name: username,
      password,
    };

    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsLoading(false);
          setUser(user);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  }
  return (
    <div>
      <Card className='login_card'>
        <CardContent>
          <h2>Create account</h2>
        </CardContent>
        <CardActions>
          <form onSubmit={onSubmit}>
            <div>
              <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter new username..."
                  id="exampleEmailInput"
                  onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
              <label>Password </label>
                <input
                  type="password"
                  placeholder="Enter new password..."
                  id="exampleEmailInput"
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button
              className="button-primary"
              type="submit"
              value={isLoading ? "Loading..." : "Sign Up"}
              >Sign Up
            </Button>
          </form>
        </CardActions>
      </Card>
    </div>
  );
};

export default Auth;
