import { Link } from "react-router-dom";

const Navigation = ({ setIsAuthenticated, setUser, user }) => {
  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setIsAuthenticated(false);
      setUser(null);
    });
  };

  return (
    <div className="navigation">
      <h1 className="u-pull-left">Flatiron Dental</h1>
      <button className="u-pull-right" onClick={logout}>
        Logout
      </button>
      <div className="u-cf"></div>
      <h4>Welcome, {user.name}!</h4>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/appointments">Appointments</Link>
        {/* <Link to="/dentists">Dentists</Link> */}
      </nav>
    </div>
  );
}

export default Navigation;
