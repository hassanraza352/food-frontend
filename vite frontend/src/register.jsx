
{/* <link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/login.css"> */}
import "./css/common.css"
import "./css/login.css"
import { Link } from "react-router-dom";

function Register(){
  return(
<div className="center-shell">
  <div className="auth-card ticket rise">
    <div className="brand" style={{justifyCcontent:"center",marginBottom:"6px"}}><span className="brand-mark">🍔</span> FeastFlow</div>

    <h1 className="auth-title">Create Account ✨</h1>
    <p className="muted auth-sub">Join us today!</p>

    <form className="auth-form" onsubmit="return false;">
      <div className="field">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name"/>
      </div>
      <div className="field">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email"/>
      </div>
      <div className="field">
        <label for="password">Password</label>
        <div className="input-wrap">
          <input type="password" id="password" placeholder="Enter your password"/>
          <span className="toggle-eye">👁️</span>
        </div>
      </div>
      <div className="field">
        <label for="confirm">Confirm Password</label>
        <div className="input-wrap">
          <input type="password" id="confirm" placeholder="Confirm your password"/>
          <span className="toggle-eye">👁️</span>
        </div>
      </div>

      <Link to="/user/home" className="btn btn-primary btn-block btn-cta">Register</Link>
    </form>

    <p className="auth-foot muted">Already have an account? <Link to="/login" className="link-orange">Login</Link></p>
  </div>
</div>
)}
export default Register;


