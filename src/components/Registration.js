import React, { useEffect, useState } from "react";
// import "./myStyles.css";
import "./registerStyle.css"
import { useNavigate,NavLink, Navigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cnf_password: "",
  });

  const { name, email, password, cnf_password } = userData;
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( name==="" || email === "" || password === "" || cnf_password === "") {
      alert("All fields are required !! ");
      return false;
    } else if (password !== cnf_password) {
      alert("Passwords do not match...");
      return false;
    } else {
      setUserData({ email: "", password: "", cnf_password: "" });
      localStorage.setItem("registeredUser", JSON.stringify(userData));
      navigate("/login");
    }
  };

  let regToken = JSON.parse(localStorage.getItem("registeredUser"))
  useEffect(()=>{
    if(regToken){
        navigate("/login")
    }
  },[])

  return (
    <div className="login__container">
      <h1> Register now !</h1>
      <form onSubmit={handleSubmit}>
        <ul className="login-form-content">
        <li>
            <input
              type="text"
              name="name"
              placeholder="Name.."
              value={name}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="password"
              name="cnf_password"
              placeholder="Confirm Password"
              value={cnf_password}
              onChange={handleChange}
            />
          </li>
          <li>
            <input type="submit" id="btn-form" value="Register" />
            {/* <button type="submit" id="btn-form">Register</button> */}
          </li>
        </ul>
        <p>Allready Registerd ?? <NavLink to="/login" id="reg-login">Login Now</NavLink></p>
      </form>
    </div>
  );
};

export default Register;
