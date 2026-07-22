
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
            "https://food-shop-backend-production-5a9f.up.railway.app/api/login",
            formData,
            {
                withCredentials: true
            }
        );

        console.log(response.data.user);

        if (response.data.user.role !== "admin") {

            alert("You are not an admin");
            return;

        }

        navigate("/admin/dashboard");
        window.location.reload();

    }
    catch (error) {

        console.log(error);

        alert(
            error.response?.data?.message ||
            "Login failed"
        );

    }

};
  return(
<div className="center-shell admin-shell">
  <div className="auth-card ticket rise">
    <div className="brand" style={{justifyContent: "center",marginBottom: "6px",
}}><span className="brand-mark">🍔</span> FeastFlow</div>

    <div className="role-tabs">
      <Link to="/login" className="role-tab">👤 User</Link>
      <Link to="/login-admin" className="role-tab active admin-active">🛠️ Admin</Link>
    </div>

    <h1 className="auth-title">Admin Console 🔐</h1>
    <p className="muted auth-sub">Manage your restaurant network</p>

    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">Admin Email</label>
        <input value={formData.email}
    onChange={(e) =>
        setFormData({
            ...formData,
            email: e.target.value})
    } type="email" id="email" placeholder="Enter your admin email"/>
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <div className="input-wrap">
          <input  value={formData.password}
    onChange={(e) =>
        setFormData({
            ...formData,
            password: e.target.value
        })
    } type="password" id="password" placeholder="Enter your password"/>
          <span className="toggle-eye">👁️</span>
        </div>
        <Link to="#" className="forgot-link">Forgot password?</Link>
      </div>

      <button  className="btn btn-purple btn-block btn-cta">Login to Dashboard</button>
    </form>

    <p className="auth-foot muted">Not an admin? <Link to="/login" className="link-orange">Go to user login</Link></p>
  </div>
</div>
)}
export default Login;


