import { Routes, Route }
from "react-router-dom";

import Register
from "./pages/Register";

import VerifyOtp
from "./pages/VerifyOtp";

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

    </Routes>

  );

}

export default App;