import React, { useState } from "react";
import Swal from "sweetalert2";
import Forgetform from "./Forgetform";
import Forgetvalidated from "./Forgetvalidated";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Forget = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    setLoading(true);
    delete values.confirmpassword;

    let url = "https://iitn.herokuapp.com/v1/auth/forgot-password";
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
          title:
            "Password reset email has been successfully sent to your email",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          navigate("/new-password");
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
  const { handleChange, handleSubmit, values, errors } = Forgetform(
    submit,
    Forgetvalidated
  );
  return (
    <>
      {loading && <div class="loading" />}
      <div className="forget_password">
        <h4 className="rest_title">Reset Password </h4>
        <p className="reset_p">Please enter your Email to reset password</p>
        <form onSubmit={handleSubmit} Forgetvalidated>
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
          <button type="submit" className="loginbtn width_input mt-4">
            Send Reset Link
          </button>
        </form>
      </div>
    </>
  );
};

export default Forget;
