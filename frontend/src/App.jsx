import { Routes, Route }
from "react-router-dom";

import Register
from "./pages/Register";

import VerifyOtp
from "./pages/VerifyOtp";
import Login from "./pages/Login";
function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Register />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOtp />}
      />

      <Route
  path="/login"
  element={<Login />}
/>
    </Routes>

  );

}

export default App;