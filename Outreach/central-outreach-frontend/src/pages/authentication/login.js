import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { useState } from "react";
import axiosInstance from "../../axiosAPI";
import store from "../../store/index";
import { Redirect } from "react-router-dom";
import ToastDismiss from "../../component/ui-element/toastdismiss";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import login from "./isloggedin";

import {
  SET_LAST_LOGIN,
  SET_USER,
  SET_VERIFIED,
  SET_AUTHENTICATED,
  SET_ROLE,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
} from "../../redux/actionType";

import Image from "material-ui-image";
import Header from "../../component/common/header/header";
import HeaderNew from "../../component/common/header/headerNew";

const Login = (props) => {
  // login.isloggedin=1;
  const [userName, setUserNameState] = useState("");
  const [userNameVerified, setUserNameVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [authComplete, setAuthComplete] = useState(false);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserNameChange = (e) => {
    // trial enqueue snackbar
    // enqueueSnackbar(`${e.target.value}`);
    setUserNameState(e.target.value);
  };

  const handleVerifyUserNameOnClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("api/token/", {
        username: userName,
      });
      console.log(res.data);
      if (res.status === 200) {
        enqueueSnackbar("Username Verified", { variant: "success" });
        await store.dispatch({
          type: SET_USER,
          payload: { user: res.data.username },
        });
        if (res.data.last_login !== null) {
          await store.dispatch({
            type: SET_LAST_LOGIN,
            payload: { lastLogin: res.data.last_login },
          });
        }
        await store.dispatch({
          type: SET_VERIFIED,
          payload: { verifed: true },
        });
        // await store.dispatch({
        //   type: SET_EMAIL,
        //   payload: { email: res.data.email },
        // });
        // await store.dispatch({
        //   type: SET_FIRST_NAME,
        //   payload: { first_name: res.data.first_name },
        // });
        // await store.dispatch({
        //   type: SET_LAST_NAME,
        //   payload: { last_name: res.data.last_name },
        // });
        setUserNameVerified(true);
      }
    } catch (error) {
      enqueueSnackbar("Username not registered", { variant: "error" });
      console.log(error);
      // setError(true);
    }

    setLoading(false);
  };

  const handleLogInOnClick = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axiosInstance.post("api/token/obtain/", {
        username: store.getState().Authdata.user,
        password: password,
      });
      if (response.status === 200) {
        // login.isloggedin=true;

        // console.log("status login",login.isloggedin)
        enqueueSnackbar("Login Successful", { variant: "success" });
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + response.data.access;
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        console.log(response.status);
        console.log("authentication", store.getState().Authdata.authenticated);
        store.dispatch({
          type: SET_AUTHENTICATED,
          payload: { authenticated: true },
        });
        console.log(localStorage.getItem("refresh_token"));
        const tokenParts = JSON.parse(atob(response.data.access.split(".")[1]));
        store.dispatch({
          type: SET_ROLE,
          payload: { role: tokenParts.role },
        });

        localStorage.setItem("phone_number", tokenParts.phone_number);
        localStorage.setItem("pi", tokenParts.pi);
        localStorage.setItem("email", tokenParts.email);
        localStorage.setItem("first_name", tokenParts.first_name);
        localStorage.setItem("last_name", tokenParts.last_name);

        // await store.dispatch({
        //   type: SET_EMAIL,
        //   payload: { email: tokenParts.email },
        // });
        // await store.dispatch({
        //   type: SET_FIRST_NAME,
        //   payload: { first_name: tokenParts.first_name },
        // });
        // await store.dispatch({
        //   type: SET_LAST_NAME,
        //   payload: { last_name: tokenParts.last_name },
        // });
        // history.push("/user/dashboard/");
        console.log("login res", response);
      }
      setAuthComplete(true);
    } catch (error) {
      enqueueSnackbar("Wrong Password or some Technical Error", {
        variant: "error",
      });
      // setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <React.Fragment>
        <Header />
      </React.Fragment>

      <div className="page-wrapper">
        {!authComplete ? (
          <Container fluid={true} className="p-0">
            {/*  <!-- login page start--> */}
            <div className="authentication-main m-0">
              {}
              <Row>
                <Col md="12">
                  <div className="auth-innerright">
                    <div className="authentication-box">
                      <CardBody className="h-100-d-center">
                        <div className="cont text-center b-light">
                          <div>
                            <Form
                              className="theme-form"
                              onSubmit={(e) => {
                                if (userNameVerified === false) {
                                  handleVerifyUserNameOnClick(e);
                                } else {
                                  handleLogInOnClick(e);
                                }
                              }}
                            >
                              <h2>
                                <b>LOGIN</b>
                              </h2>
                              {/* <h6>Enter your registered username</h6> */}
                              {loading && (
                                <div className="loader-box">
                                  <div className="loader-10"></div>
                                </div>
                              )}
                              {userNameVerified ? (
                                <>
                                  <h6>
                                    Welcome <b>{userName}</b>
                                  </h6>
                                  {/* <h6>
                                  {store.getState().Authdata.lastLogin === null
                                    ? "This is your first login"
                                    : `Your Last Login was
                                  ${store.getState().Authdata.lastLogin}`}
                                </h6> */}
                                </>
                              ) : (
                                <>
                                  <FormGroup>
                                    <Label className="col-form-label">
                                      <b>Username</b>
                                    </Label>
                                    <Input
                                      placeholder="Enter Username"
                                      id="username"
                                      className="btn-pill"
                                      type="text"
                                      onChange={handleUserNameChange}
                                      required
                                    />
                                  </FormGroup>
                                  <FormGroup className="form-row mt-3 mb-0">
                                    <Button
                                      // type="submit"
                                      color="primary btn-block"
                                      onClick={handleVerifyUserNameOnClick}
                                    >
                                      Verify Username
                                    </Button>
                                  </FormGroup>
                                  <FormGroup className="form-row mt-3 mb-0 ml-3">
                                    <Link to={"/forgetpwd"}>
                                      Forgot Password?
                                    </Link>
                                  </FormGroup>
                                </>
                              )}
                              {userNameVerified && (
                                <>
                                  <FormGroup>
                                    <Label className="col-form-label">
                                      <b>Password</b>
                                    </Label>
                                    <Input
                                      autoFocus
                                      onChange={handlePasswordChange}
                                      id="login-username-id"
                                      className="btn-pill"
                                      type="password"
                                      required
                                      placeholder="Enter Password"
                                    />
                                  </FormGroup>
                                  <FormGroup className="form-row mt-3 mb-0">
                                    <Button
                                      // type="submit"
                                      color="primary btn-block"
                                      onClick={handleLogInOnClick}
                                    >
                                      Log In
                                    </Button>
                                  </FormGroup>
                                  <FormGroup className="form-row mt-3 mb-0 ml-3">
                                    <Link to={"/forgetpwd"}>
                                      Forgot Password?
                                    </Link>
                                  </FormGroup>
                                </>
                              )}{" "}
                              <div className="social mt-3">
                                <Label style={{ color: "#fff" }}>hk</Label>
                              </div>
                            </Form>
                          </div>
                          <div className="sub-cont">
                            <div className="img">
                              <Image src="static/media/flask-vlabs.283c8544.png" />
                            </div>
                          </div>
                        </div>
                        {/* <ToastDismiss
                        toastShow={error}
                        toastHeader="An Error Occured"
                        toastBody="Please check the Username or Password. In case of persistent errors, contact Administrator"
                      /> */}
                      </CardBody>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/* <!-- login page end--> */}
          </Container>
        ) : (
          <Redirect to={`${process.env.PUBLIC_URL}/user/dashboard`} />
          // <Route path={`${process.env.PUBLIC_URL}/user/dashboard`}
          //  Component={BasicDashboard}
          //  />
        )}
      </div>
    </>
  );
};

export default Login;
