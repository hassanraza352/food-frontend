import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/otp.css"

function VerifyOtp() {

    const navigate = useNavigate();
    const { state } = useLocation();

    const email = state?.email;

    const [otp, setOtp] = useState("");

    const verifyOtp = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:3000/api/verify-otp",
                {
                    email,
                    otp
                }
            );

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            alert(error.response.data.message);

        }

    };

    return (

               <div className="otp-shell center-shell">
            <div className="otp-card rise">

                <h2 className="otp-title">Email Verification</h2>

                <p className="otp-email">{email}</p>

                <form className="otp-form" onSubmit={verifyOtp}>

                    <input
                        className="otp-input"
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <button type="submit" className="btn btn-primary btn-block otp-btn">
                        Verify OTP
                    </button>

                </form>

            </div>
        </div>

    );

}

export default VerifyOtp;