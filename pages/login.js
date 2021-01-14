import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import BlankLayout from "../themes/blankLayout";
import { connect } from "react-redux";
import { Formik } from "formik";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  // const [username, setusername] = useState('ryan@gmail.com');
  // const [password, setPassword] = useState('rrrrrr9');
  // const [user, setUser] = useState('rrrrrr9');
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();
  const history = useHistory();

  const url = process.env.api;

  // useEffect(() => {
  //   if (user) { // will run the condition if user exists
  //     router.push('/')
  //   }

  // }, [user])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login with ", { username, password });
  };

  return (

    <>
      <div className="content-header row"></div>
      <div className="content-overlay" />
      <div className="content-wrapper">
        <div className="content-body">
          <section className="row flexbox-container">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                  <div className="card-header border-0">
                    <div className="card-title text-center">
                      <img
                        src="../../../app-assets/images/logo/logo-dark.png"
                        alt="branding logo"
                      />
                    </div>
                    <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                      <span>Easily Using</span>
                    </h6>
                  </div>
                  <div className="card-content">
                    <div className="text-center">
                      <a
                        href="#"
                        className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook"
                      >
                        <span className="la la-facebook" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter"
                      >
                        <span className="la la-twitter" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin"
                      >
                        <span className="la la-linkedin font-medium-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-social-icon mr-1 mb-1 btn-outline-github"
                      >
                        <span className="la la-github font-medium-4" />
                      </a>
                    </div>
                    <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                      <span>OR Using Account Details</span>
                    </p>
                    <div className="card-body">
                      <Formik
                        initialValues={{
                          username: "patjawat",
                          password: "112233",
                        }}
                        validate={(values) => {
                          const errors = {};
                          // if (!values.username) {
                          //     errors.username = 'Required';
                          // } else {
                          //     errors.username = 'Invalid username address';
                          // }
                          // if (!values.username) {
                          //     errors.username = 'Required';
                          // } else if (
                          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
                          // ) {
                          //     errors.username = 'Invalid username address';
                          // }
                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          axios
                            .post(url + "login", values)
                            .then((res) => {
                              dispatch({
                                type: "USER_LOGIN",
                                payload: res.data,
                              });
                              //   console.log(res);
                              Cookies.set("token", "Bearer " + res.data.token, {
                                expires: 60,
                              });
                              dispatch({ type: "GET_USER", payload: res.data });
                              router.push("/");
                            })
                            .then((res) => {
                              // dispatch({type: 'GET_USER',payload: res.data});
                              console.log(res);
                            });
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}
                            className="form-horizontal"
                            action="index.html"
                            noValidate
                          >
                            <fieldset className="form-group position-relative has-icon-left">
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                id="user-name"
                                placeholder="Your Username"
                                required
                              />
                              <div className="form-control-position">
                                <i className="la la-user" />
                              </div>
                            </fieldset>
                            <fieldset className="form-group position-relative has-icon-left">
                              <input
                                type="password"
                                className="form-control"
                                id="user-password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Enter Password"
                                required
                              />
                              <div className="form-control-position">
                                <i className="la la-key" />
                              </div>
                            </fieldset>
                            <div className="form-group row">
                              <div className="col-sm-6 col-12 text-center text-sm-left pr-0">
                                <fieldset>
                                  <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="chk-remember"
                                  />
                                  <label htmlFor="remember-me">
                                    {" "}
                                    Remember Me
                                  </label>
                                </fieldset>
                              </div>
                              <div className="col-sm-6 col-12 float-sm-left text-center text-sm-right">
                                <a
                                  href="recover-password.html"
                                  className="card-link"
                                >
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-outline-info btn-block"
                            >
                              <i className="ft-unlock" /> Login
                            </button>
                          </form>
                        )}
                      </Formik>
                    </div>
                    {/* <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                      <span>New to Modern ?</span>
                    </p>
                    <div className="card-body">
                      <a
                        href="register-with-bg-image.html"
                        className="btn btn-outline-danger btn-block"
                      >
                        <i className="la la-user" />
                        Register
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const logout = (username, password) => {
  Cookies.remove("token");
  setUser(null);
  window.location.pathname = "/login";
};

Login.Layout = BlankLayout;
