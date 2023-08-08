import React, { useState } from 'react';
import "./../CSS/Signup.css"

function Signup({setScreen,setSinedIn}) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSignup = async(event) => {
    // Simulating signup functionality with basic validation
    if (
      email.trim() === '' ||
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      mobileNumber.trim() === '' ||
      password.trim() === '' ||
      address.trim() === '' ||
      role.trim() === ''
    ) {
      alert('Please fill in all the fields.');
    } else {
        const response = await fetch('http://localhost:8080/users/addUser', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { 
                "address": address,
                "email": email,
                "firstName": firstName,
                "lastName": lastName,
                "mobileNumber": mobileNumber,
                "password": password,
                "role": role
              }
        )
      })
      const resp=await response.json()
      setIsRegistered(true);
      setSinedIn()
      alert('Successfully Regestered');
      setScreen("Home")
    }event.preventDefault();

  };

  if (isRegistered) {
    return (
      <div>
        <h1>Registration Successful!</h1>
        <p>Welcome, {firstName} {lastName}!</p>
      </div>
    );
  } else {
    return (
      <div className="signup-form">
      <h1>Sign Up</h1>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
      />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <textarea placeholder="Address" value={address} onChange={handleAddressChange} />
      <select value={role} onChange={handleRoleChange}>
        <option value="">Select Role</option>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </select>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
  }
}

export default Signup;
