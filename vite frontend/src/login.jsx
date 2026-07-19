import "./css/common.css"
import "./css/login.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
});

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        formData,
        {
          withCredentials: true
        }
      );
     const loggedInUser = response.data.user;
    console.log(loggedInUser.role);


if (loggedInUser.role === "user") {
    navigate("/user/home");
}
else {
  alert("You are not a user");
  navigate("/login");
}


    }
    catch(error){
      alert('invalid user');
      console.log("login mei error arha ha")
      console.log(error);
    }
}
  return(

<div className="center-shell">
  <div className="auth-card ticket rise">
    <div className="brand" style={{ justifyContent: "center", marginBottom: "6px" }}><span className="brand-mark">🍔</span> FeastFlow</div>

    <div className="role-tabs">
      <Link to="/login" className="role-tab active">👤 User</Link>
      <Link to="/login-admin" className="role-tab">🛠️ Admin</Link>
    </div>

    <h1 className="auth-title">Welcome Back! 🎉</h1>
    <p className="muted auth-sub">Login to your account</p>
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">Email</label>
<input
    type="email"
    value={formData.email}
    onChange={(e) =>
        setFormData({
            ...formData,
            email: e.target.value
        })
    }
/>      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <div className="input-wrap">
<input
    type="password"
    value={formData.password}
    onChange={(e) =>
        setFormData({
            ...formData,
            password: e.target.value
        })
    }
/>          <span className="toggle-eye">👁️</span>
        </div>
        <Link to="#" className="forgot-link">Forgot password?</Link>
      </div>

      <button  className="btn btn-primary btn-block btn-cta">Login</button>
    </form>

    <p className="auth-foot muted">Don't have an account? <Link to="/user/register" className="link-orange">Register</Link></p>
  </div>
</div>
)}
export default Login;


