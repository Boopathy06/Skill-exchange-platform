import { useState } from "react";
import image from "../assets/register-image.png";
import "./../styles/Register.css";
import { registerUser } from "../services/authService";
import { FcGoogle } from "react-icons/fc";
import {
  useNavigate
}
from "react-router-dom";
function Register() {
  const navigate =
    useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response =
      await registerUser(formData);

    console.log(response);

    if (response.success) {

      navigate(

  "/verify-otp",

  {
    state: {
      email:
        formData.email
    }
  }

);

    }

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      error.message
    );

  }

};

  return (
    <div className="register-container">

      <div className="left-panel">

        <div className="logo">
          <h2>Skill Exchange</h2>
        </div>

        <img
          src={image}
          alt="register"
          className="illustration"
        />

      </div>

      <div className="right-panel">

        <div className="form-wrapper">
          <h1>Create Account</h1><br></br>
          <p>Teach Skills. Learn Together.</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="register-btn"
            >
              Register
            </button>

          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <p className="login-link">
            Already have an account? Login
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;