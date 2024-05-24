import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import useForm from "./useForm";
import validate from "./validate";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [login] = useState(localStorage.getItem("token") ? true : false);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    /* eslint-disable */
    checkLogin();
  }, []);

  const checkLogin = () => {
    if (login) {
      navigate("/");
    }
  };
  const submit = async (e) => {
    setLoading(true);
    delete values.confirmpassword;
    let url = "https://iitn.herokuapp.com/v1/auth/login";
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
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("token", response.data.tokens);
        setTimeout(() => {
          navigate("/");
          // window.location.reload();
        }, 1500);
      }
    } catch (e) {
      setLoading(false);
      var error = "";
      if (e.response) {
        error = e.response;
        if (e.response.data) {
          error = e.response.data;
          if (e.response.data.message) {
            error = e.response.data.message;
          }
        }
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  };
  const openlog = () => {
    document.getElementById("pills-home-tab").click();
  };
  const openlogg = () => {
    document.getElementById("pills-profile-tab").click();
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  return (
    <>
      {loading && <div class="loading" />}
      <div className="loginpage">
        <header>
          <video
            className="videeeo"
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source className="login_video" src="/images/login.mp4" />
          </video>

          <div className="centerend2">
            <div className="login_header">
              <div>
                <Link to="/">
                  <img className="" src="/images/logo.svg" alt="" />
                </Link>
              </div>
              <div className="hghgh"></div>
            </div>
            <div className="container-fluid pr-0 pl-0">
              <div
                className="row 
               align-items-center mt-5"
              >
                <div className="auth">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item tabs-button" role="presentation">
                      <a
                        class="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Login
                      </a>
                    </li>
                    <li class="nav-item tabs-button" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Create Account
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content " id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form onSubmit={handleSubmit} noValidate>
                        <div>
                          <label
                            className="sr-only"
                            htmlFor="inlineFormInputGroupUsername2"
                          >
                            Username
                          </label>
                          <div className="w-100 input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <img src="/images/msg.svg" alt="" />
                              </div>
                            </div>
                            <input
                              className={`form-control ggg ${
                                errors.email && "inputError"
                              }`}
                              name="email"
                              type="email"
                              // className="form-control ggg"
                              id="inlineFormInputGroupUsername2"
                              placeholder="Email Address"
                              value={values.email}
                              onChange={handleChange}
                            />
                          </div>
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>

                        <div className="mt-4">
                          <label
                            className="sr-only"
                            htmlFor="inlineFormInputGroupUsername2"
                          >
                            Username
                          </label>
                          <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <img src="/images/lock.svg" alt="" />
                              </div>
                            </div>
                            <input
                              className={`form-control ggg ${
                                errors.password && "inputError"
                              }`}
                              name="password"
                              type={open === false ? "password" : "text"}
                              // className=""
                              id="inlineFormInputGroupUsername2"
                              placeholder="Password"
                              value={values.password}
                              onChange={handleChange}
                            />
                            {open === false ? (
                              <AiFillEyeInvisible
                                className="svggg"
                                onClick={toggle}
                              />
                            ) : (
                              <AiFillEye className="svggg" onClick={toggle} />
                            )}
                          </div>
                          {errors.password && (
                            <p className="error">{errors.password}</p>
                          )}
                        </div>

                        <div className="loog">
                          <div className="flex_footer">
                            <div className="form-group">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label rember"
                                  htmlFor="gridCheck"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <Link to="/forget">
                              <div className="forget-title">
                                Forgot Password ?
                              </div>
                            </Link>
                          </div>

                          <button type="submit" className="logbtn mt-5 ml-1">
                            Login
                          </button>
                        </div>

                        <div className="text-center mt-5 register">
                          Don’t have an Account ?
                          <span onClick={openlogg} className=" pl-2 black">
                            REGISTER
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

                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <Signup openlog={openlog} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Login;
