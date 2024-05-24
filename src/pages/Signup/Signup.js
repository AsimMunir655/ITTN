import React, { useState } from "react";
import Swal from "sweetalert2";
import UsesignupForm from "./UsesignupForm";
import validatesignup from "./Validatesignup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";

const Signup = ({ openlog }) => {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    delete values.confirmpassword;
    setLoading(true);
    let url = "https://iitn.herokuapp.com/v1/auth/register";
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
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          openlog();
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
  const { handleChange, handleSubmit, values, errors } = UsesignupForm(
    submit,
    validatesignup
  );
  const toggle = () => {
    setOpen(!open);
  };
  const togglee = () => {
    console.log(!open);
    setOpenn(!openn);
  };
  return (
    <div>
      {loading && <div class="loading m-auto" />}
      <form onSubmit={handleSubmit} validatesignup>
        <div className="mt-4">
          <label
            className="sr-only"
            htmlFor="inlineFormInputGroupUsername2"
          ></label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <img src="/images/msg.svg" alt="" />
              </div>
            </div>
            <input
              className={`form-control ggg ${errors.email && "inputError"}`}
              name="email"
              type="email"
              //   className="form-control ggg"
              id="inlineFormInputGroupUsername2"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="mt-4">
          <label
            className="sr-only"
            htmlFor="inlineFormInputGroupUsername2"
          ></label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <img src="/images/@.svg" alt="" />
              </div>
            </div>
            <input
              name="username"
              type="text"
              className={`form-control ggg ${errors.username && "inputError"}`}
              id="inlineFormInputGroupUsername2"
              placeholder="@username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="mt-4">
          <label
            className="sr-only"
            htmlFor="inlineFormInputGroupUsername2"
          ></label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <img src="/images/lock.svg" alt="" />
              </div>
            </div>

            <input
              name="password"
              type={open === false ? "password" : "text"}
              className={`form-control ggg ${errors.password && "inputError"}`}
              id="inlineFormInputGroupUsername2"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {open === false ? (
              <AiFillEyeInvisible className="svggg" onClick={toggle} />
            ) : (
              <AiFillEye className="svggg" onClick={toggle} />
            )}
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="mt-4">
          <label
            className="sr-only"
            htmlFor="inlineFormInputGroupUsername2"
          ></label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <img src="/images/lock.svg" alt="" />
              </div>
            </div>
            <input
              name="confirmpassword"
              type={openn === false ? "password" : "text"}
              className={`form-control ggg ${
                errors.confirmpassword && "inputError"
              }`}
              id="inlineFormInputGroupUsername2"
              placeholder="Confirm Password"
              value={values.confirmpassword}
              onChange={handleChange}
            />
            {openn === false ? (
              <AiFillEyeInvisible className="svggg" onClick={togglee} />
            ) : (
              <AiFillEye className="svggg" onClick={togglee} />
            )}
          </div>
          {errors.confirmpassword && (
            <p className="error">{errors.confirmpassword}</p>
          )}
        </div>
        <button type="submit" className="logbtn mt-4">
          Create Account
        </button>
        <div className="text-center mt-3 register">
          Already have an Account ?
          <span className=" pl-2 black" onClick={openlog}>
            LOGIN
          </span>
        </div>
        <div className="text-center mt-3 register">
          <a className="linkk mr-1" href="/">
            Privacy Policy
          </a>
          |
          <a className="ml-1 mr-1 linkk" href="/">
            Cookies Policy Terms of Use
          </a>
          |
          <a className="ml-1 linkk" href="/">
            Learn More
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
