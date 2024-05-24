import React, { useState } from "react";
import Newfrom from "./Newfrom";
import Swal from "sweetalert2";
import Newvalidated from "./Newvalidated";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    delete values.confirmpassword;

    let url = "https://iitn.herokuapp.com/v1/auth/reset-password";
    let options = {
      method: "POST",
      url: url,
      headers: {},
      data: values,
    };

    try {
      let response = await axios(options);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "password changed Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
          // window.location.reload();
        }, 1500);
      }
    } catch (e) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: e.response.data.message,
      });
    }
  };
  const { handleChange, handleSubmit, values, errors } = Newfrom(
    submit,
    Newvalidated
  );
  return (
    <>
      {loading && <div class="loading" />}
      <div className="new_password">
        <h4 className="rest_title">New Password </h4>
        <p className="reset_p">Please enter password to setup a new one.</p>
        <form onSubmit={handleSubmit} Newvalidated>
          <div className="pb-3">
            <input
              value={values.code}
              type="password"
              onChange={handleChange}
              name="code"
              className={`signup_inputs width_input ${
                errors.code && "inputError"
              }`}
              placeholder="Enter code"
            />

            {errors.code && <p className="error">{errors.code}</p>}
          </div>

          <div className="pb-3">
            <input
              value={values.email}
              onChange={handleChange}
              name="email"
              className={`signup_inputs width_input ${
                errors.email && "inputError"
              }`}
              type="email"
              placeholder="Email Address"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="pb-3">
            <input
              value={values.newPassword}
              type="password"
              onChange={handleChange}
              name="newPassword"
              className={`signup_inputs width_input ${
                errors.newPassword && "inputError"
              }`}
              placeholder="Confrim new Password"
            />

            {errors.newPassword && (
              <p className="error">{errors.newPassword}</p>
            )}
          </div>
          <button type="submit" className="loginbtn width_input mt-4">
            Change Password
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPassword;
