import { useState } from "react";
import "../styles/VerifyOtp.css";

function VerifyOtp() {

    const [otp, setOtp] = useState("");

    return (

        <div className="verify-container">

            <div className="verify-card">

                <h1>Verify OTP</h1>

                <input
                    className="verify-input"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) =>
                        setOtp(e.target.value)
                    }
                />

                <button
                    className="verify-btn"
                >
                    Verify OTP
                </button>

            </div>

        </div>

    );
}

export default VerifyOtp;