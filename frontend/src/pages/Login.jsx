import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import image from "../assets/login-image.jpg";
import "../styles/Login.css";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

  };

  return (

    <div className="login-container">

      {/* LEFT */}

      <div className="login-left">

        <div className="logo">

          <h2>
            Skill Exchange
          </h2>

        </div>

        <img

          src={image}

          alt="login"

          className="login-image"

        />

      </div>

      {/* RIGHT */}

      <div className="login-right">

        <div className="login-form">

          <h1>
            Welcome Back
          </h1>

          <p>
            Continue learning and teaching
          </p>

          <form onSubmit={handleSubmit}>

            <input

              type="email"

              name="email"

              placeholder="Email Address"

              value={formData.email}

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

              className="login-btn"

              type="submit"

            >

              Login

            </button>

          </form>

          <div className="divider">

            OR

          </div>

          <button className="google-btn">

            <FcGoogle size={22} />

            Continue with Google

          </button>

          <p className="register-link">

            Don't have an account?

            Register

          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;