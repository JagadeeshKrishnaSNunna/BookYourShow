import React, { useState } from 'react';
import "../CSS/Login.css"

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = async(event) => {
    await setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (
      username.trim() === '' ||
      password.trim() === '' 
    ) {
      alert('Please fill in all the fields.');
    }
    else{
    // Prepare login credentials object
    const credentials = {
      username,
      password,
    };
    // Send POST request to the login endpoint
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.text())
      .then((data) => {
        // Handle the response from the backend (e.g., store the authentication token)
        if(JSON.parse(data)['email']){
            sessionStorage.setItem("user",data)
            props.dataFromAppBar(props.screen)
            props.setSinedIn()
        }else{alert("Invalid credentials")}
        // Add your logic here to handle authentication success or failure
      })
      .catch((error) => {
        alert('Login failed:', error);
      });
  };
  }
  return (
    <div className='loginContainer'>
      <h1>Login</h1>
      <input className='inputstyle' type="text" placeholder="Username or Email" value={username} onChange={handleUsernameChange} />
      <input className="inputstyle" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button style={{width:'60px'}} onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
