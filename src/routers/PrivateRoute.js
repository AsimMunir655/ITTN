import React from "react";
import { Navigate } from "react-router-dom";
const isLogin = () => {
  var token = localStorage.getItem("token");
  if (token) {
    if (token !== "") {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
// import { isLogin } from "../utils";

const PrivateRoute = ({ component: Component }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    isLogin() ? <Component /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;
