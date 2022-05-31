import React, {useState} from 'react'

function Auth({setUser, setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] =useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name: username,
            password
        }

        fetch ('/users',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(user=>{
                    setUser(user)
                    setIsAuthenticated(true)
                })
            } else {
                res.json()
                .then(json => setErrors(json.errors))
            } 
            
        })
    }
    return(
    <div className="form">
        <h1>First time? Welcome!</h1>
        <h3>Create account below!</h3>
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="six columns">
          <label>Username</label>
          <input className="u-full-width" type="text" placeholder="Enter new username..." id="exampleEmailInput" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="six columns">
          <label >Password</label>
          <input className="u-full-width" type="text" placeholder="enter new password..." id="exampleEmailInput" onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <input className="button-primary" type="submit" value="Sign up!"/>
    </form>
    </div>
    
    )
}

export default Auth;