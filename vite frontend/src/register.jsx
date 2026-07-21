import "./css/common.css"
import "./css/login.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
});
const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await axios.post(
            "http://localhost:3000/api/register",
            formData,
            {
                withCredentials: true
            }
        );
        navigate("/verify-otp", {
    state: {
        email: formData.email
    }
});

        console.log(response.data);

    } catch (error) {

        console.log(error);

    }
};

  return(
<div className="center-shell">
  <div className="auth-card ticket rise">
    <div className="brand" style={{justifyCcontent:"center",marginBottom:"6px"}}><span className="brand-mark">🍔</span> FeastFlow</div>

    <h1 className="auth-title">Create Account ✨</h1>
    <p className="muted auth-sub">Join us today!</p>

    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
<input
type="text"
id="name"
placeholder="Enter your name"
value={formData.name}
onChange={(e)=>
setFormData({
...formData,
name:e.target.value
})
}
/>      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
<input
type="text"
id="email"
placeholder="Enter your email"
value={formData.email}
onChange={(e)=>
setFormData({
...formData,
email:e.target.value
})
}
/>      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <div className="input-wrap">
<input
type="text"
id="password"
placeholder="Enter your password"
value={formData.password}
onChange={(e)=>
setFormData({
...formData,
password:e.target.value
})
}
/>          <span className="toggle-eye">👁️</span>
        </div>
      </div>
      {/* <div className="field">
        <label for="confirm">Confirm Password</label>
        <div className="input-wrap">
          <input type="password" id="confirm" placeholder="Confirm your password"/>
          <span className="toggle-eye">👁️</span>
        </div>
      </div> */}

<button
type="submit"
className="btn btn-primary btn-block btn-cta">
Register
</button>   

 </form>
    <p className="auth-foot muted">Already have an account? <Link to="/login" className="link-orange">Login</Link></p>
  </div>
</div>
)}
export default Register;


