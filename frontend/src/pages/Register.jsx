import image from "../assets/register-image.png";
import "./../styles/Register.css";
import { FcGoogle } from "react-icons/fc";
function Register() {
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

          <h1>Create Account</h1>
          <p>Join the Skill Exchange Platform</p>

          <form>

            <input
              type="text"
              placeholder="Username"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Mobile Number"
            />

            <input
              type="password"
              placeholder="Password"
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

          <button className="google-btn">
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