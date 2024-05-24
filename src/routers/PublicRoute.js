import React from "react";


const PublicRoute = ({ component: Component }) => {
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
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    !isLogin() ? <Component /> : <Component />
  );
};

export default PublicRoute;
