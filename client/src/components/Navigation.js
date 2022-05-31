import {Link} from "react-router-dom";

function Navigation({setIsAuthenticated, setUser, user}) {
    console.log(user)
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }
    return (
         
        <div className="navigation">
            <h1 className="u-pull-left">Nice and Gentle Dental</h1>
         <button className="u-pull-right" onClick={logout}>Logout</button>
         <div className="u-cf"></div>
         <h4>Welcome, {user.name}!</h4>
         
         <nav>
           <h3 className="one-third column"><Link to="/"> Home</Link></h3>
           <h3 className="one-third column"><Link to="/dentists">Dentists</Link></h3>
           <h3 className="one-third column"><Link to="/appointments"> Appointments</Link></h3>

         </nav>
        </div>
     
    )
}

export default Navigation;