import "./css/index.css"
import "./css/common.css"
 import { Link } from "react-router-dom";
 
 function Index(){
  return(
<div className="center-shell">
  <div className="role-wrap rise">
    <div className="brand role-brand">
      <span className="brand-mark">🍔</span> FeastFlow
    </div>

    <h1 className="role-title">Welcome <span className="wave">👋</span></h1>
    <p className="muted role-sub">Please select your role to continue</p>

    <div className="role-cards">
      <Link to="/login" className="role-card ticket lift rise rise-1">
        <div className="role-icon icon-orange">👤</div>
        <div>
          <h3>I'm a Customer</h3>
          <p className="muted">Order your favorite food and get it delivered</p>
        </div>
        <span className="role-arrow">→</span>
      </Link>

      <Link to="/login-admin" className="role-card ticket lift rise rise-2">
        <div className="role-icon icon-purple">🛠️</div>
        <div>
          <h3>I'm an Admin</h3>
          <p className="muted">Manage food, orders and customers</p>
        </div>
        <span className="role-arrow">→</span>
      </Link>
    </div>

    <p className="role-foot muted">New here? <Link to="/user/register" className="link-orange">Create a customer account</Link></p>
  </div>
</div>
)}

export default Index;

