import React, { useState } from "react";
import "../components/myStyles.css";

const Profile = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let regUser = JSON.parse(localStorage.getItem("registeredUser"));
  const [profileData] = useState(token);

  return (
    <div className="userProfile-data-container">
      <div className="profile-content">
        <h1 style={{color:"#63b4bc", fontSize:"27px"}}> Welcome Mr <span style={{color:"#238d85"}}>{regUser.name}</span> !</h1>
          <h2 >Email : {profileData.email}</h2>
          <h2 >Password : {profileData.password}</h2>
      </div>
    </div>
  );
};

export default Profile;
