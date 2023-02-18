import React, { useEffect, useState } from "react";
import "./myStyles.css";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  let regUser = JSON.parse(localStorage.getItem("registeredUser"));

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  
  useEffect(()=>{
    if(!regUser)(
      navigate("/signup")
    )
  },[])

  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("All fields are required !! ");
      return false;
    } else if (email !== regUser.email) {
      alert("Enter valid email or password !");
      return false;
    } else if (password !== regUser.password) {
      alert("Enter valid email or password !");
      return false;
    } else {
      setUserData({ email: "", password: "" });
      localStorage.setItem("token", JSON.stringify(userData));
      navigate("/profile");
    }
  };

  return (
    <div className="login__container">
      <h1> Login Page !</h1>
      <form onSubmit={handleSubmit}>
        <ul className="login-form-content">
          {/* <li>
            <input
              type="text"
              name="userName"
              placeholder="User name"
              value={userName}
              onChange={handleChange}
            />
          </li> */}
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
            <input type="submit" id="btn-form" value="Submit" />
          </li>
        </ul>
        {/* <p>Allready Registerd ?? <NavLink to="/login" >Login Now</NavLink></p> */}
        <p>
          {" "}
          No Login & Password ?? <NavLink to="/signup">Register Now</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
