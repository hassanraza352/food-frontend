
{/* <link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/login.css"> */}
import "./css/common.css"
import "./css/login.css"
import { Link } from "react-router-dom";

function Login(){
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
    <form className="auth-form" >
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email"/>
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <div className="input-wrap">
          <input type="password" id="password" placeholder="Enter your password"/>
          <span className="toggle-eye">👁️</span>
        </div>
        <Link to="#" className="forgot-link">Forgot password?</Link>
      </div>

      <Link to="/user/home" className="btn btn-primary btn-block btn-cta">Login</Link>
    </form>

    <p className="auth-foot muted">Don't have an account? <Link to="/user/register" className="link-orange">Register</Link></p>
  </div>
</div>
)}
export default Login;


