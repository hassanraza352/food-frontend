
{/* <link rel="stylesheet" to="css/common.css">
<link rel="stylesheet" to="css/login.css"> */}

import "./css/common.css"
import "./css/login.css"
import { Link } from "react-router-dom";

function Login(){
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

    <form className="auth-form" onsubmit="return false;">
      <div className="field">
        <label for="email">Admin Email</label>
        <input type="email" id="email" placeholder="Enter your admin email"/>
      </div>
      <div className="field">
        <label for="password">Password</label>
        <div className="input-wrap">
          <input type="password" id="password" placeholder="Enter your password"/>
          <span className="toggle-eye">👁️</span>
        </div>
        <Link to="#" className="forgot-link">Forgot password?</Link>
      </div>

      <Link to="/admin/dashboard" className="btn btn-purple btn-block btn-cta">Login to Dashboard</Link>
    </form>

    <p className="auth-foot muted">Not an admin? <Link to="/login" className="link-orange">Go to user login</Link></p>
  </div>
</div>
)}
export default Login;


