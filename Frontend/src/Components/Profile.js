import React from 'react';
import '../CSS/profile.css';
import photo from "../logos/profile.png"

function Profile() {
  // Replace these dummy data with actual user profile data
  const userData=JSON.parse(sessionStorage.getItem("user"))
  const userProfile = {
    name: userData['firstName']+" "+userData['lastName'],
    contact_Number: userData['mobileNumber'],
    email: userData['email'],
    address: 'A web developer passionate about React.',
    profileImage: photo, // Replace with the URL of the user's profile image
  };

  return (
    <div className="profile">
      <div className="profile-image">
        <img src={userProfile.profileImage} alt="Profile" />
      </div>
      <div className="profile-info">
        <h1>{userProfile.name}</h1>
        <p>Contsct Number: {userProfile.contact_Number}</p>
        <p>Email: {userProfile.email}</p>
        <p>Address: {userProfile.address}</p>
      </div>
    </div>
  );
}

export default Profile;
