import { useState } from "react";

import {
  useLocation,
  useNavigate
}
from "react-router-dom";

import {
  verifyOtp
}
from "../services/authService";

function VerifyOtp() {

  const [otp, setOtp] =
      useState("");

  const location =
      useLocation();

  const navigate =
      useNavigate();

  const email =
      location.state.email;

  const handleVerify =
      async () => {

    try {

      const response =
        await verifyOtp({

          email,

          otp

        });

      alert(
        response.message
      );

      navigate("/login");

    }
    catch(error){

      alert(

        error.response
        ?.data
        ?.message

      );

    }

  };

  return (

    <div>

      <h1>
        Verify OTP
      </h1>

      <input

        type="text"

        placeholder=
          "Enter OTP"

        value={otp}

        onChange={(e)=>

          setOtp(
            e.target.value
          )

        }

      />

      <button

        onClick={
          handleVerify
        }

      >

        Verify OTP

      </button>

    </div>

  );

}

export default VerifyOtp;