import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./myStyles.css"

const Logout = ()=> {

    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const handleLogout = ()=>{
        localStorage.removeItem("registeredUser")
        localStorage.removeItem("token")
        navigate("/login");
    }

    useEffect(() => {
      if (!token) {
        navigate("/login");
      }
    },[])
    return(
      <div className="logout__container">
        <h2>You are loged in ! </h2>
        <h3>Log out now ! </h3>
        <button className="logout-btn" onClick={handleLogout} >Log out</button>
      </div>
    )
  }
  export default Logout;