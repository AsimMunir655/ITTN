import React from "react";
import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import LandingPages from "./pages/LandingPages";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import FashtionEverything from "./components/FashtionEverything";
import Entertainment from "./components/Entertainment";
import Forget from "./pages/Forgot/Forget";
import NewPassword from "./pages/Newpassword/NewPassword";
export default function routes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PublicRoute component={LandingPages} exact />}
      />

      <Route path="/login" element={<PublicRoute component={Login} exact />} />

      <Route path="/signup" element={<PublicRoute component={Signup} />} />
      <Route
        path="/new-password"
        element={<PublicRoute component={NewPassword} />}
      />

      <Route path="/forget" element={<PublicRoute component={Forget} />} />

      <Route
        path="/fashtion"
        element={<PublicRoute component={FashtionEverything} />}
      />
      <Route
        path="/entertainment"
        element={<PublicRoute component={Entertainment} />}
      />
    </Routes>
  );
}
