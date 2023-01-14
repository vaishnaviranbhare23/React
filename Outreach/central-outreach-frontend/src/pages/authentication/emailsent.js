import React, { useRef, useState } from "react";
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
import axiosInstance from "../../axiosAPI";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";

const Emailsent = (props) => {
  const [otp, setOtp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showUuidChange, setshowUuidChange] = useState(true);
  const [showPasswordChange, setshowPasswordChange] = useState(false);
  const { register, errors, handleSubmit, watch } = useForm({});

  const password = useRef({});
  password.current = watch("password", "");

  let history = useHistory();

  const redirect = () => {
    history.push("../../../pages/login");
  };
  const toggleform = () => {
    document.querySelector(".cont").classList.toggle("s--signup");
  };
  const handleVerifyUuidOnClick = async () => {
    try {
      const res = await axiosInstance.post("api/user/create/password/", {
        otp: otp,
        password: newPassword,
      });
      console.log(res);
      if (res.status == 200) {
        enqueueSnackbar("Otp Verified", { variant: "success" });
        setshowUuidChange(false);
        setshowPasswordChange(true);
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Invalid Otp", {
        variant: "error",
      });
    }
  };
  const handleNewPasswordOnClick = async () => {
    try {
      const res = await axiosInstance.post("api/user/create/password/", {
        otp: otp,
        password: confirmPassword,
      });
      console.log(res);
      if (res.status == 201) {
        enqueueSnackbar("Password Updated", {
          variant: "success",
        });
        redirect();
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Failed", {
        variant: "error",
      });
    }
  };

  const handleUuidChange = (e) => {
    setOtp(e.target.value);
    console.log(otp);
  };
  return (
    <div className="page-wrapper">
      <Container fluid={true} className="p-0">
        {/*  <!-- login page start--> */}
        <div className="authentication-main m-0">
          <Row>
            <Col md="12">
              <div className="auth-innerright">
                <div className="authentication-box">
                  <CardBody className="h-100-d-center">
                    <div className="cont text-center b-light">
                      <div>
                        <Form className="theme-form">
                          <h2></h2>
                          <h6></h6>

                          <FormGroup>
                            <h4>
                              An email has been sent to your registered email
                              id.
                            </h4>
                          </FormGroup>
                          {showUuidChange && (
                            <>
                              <FormGroup>
                                <Label className="col-form-label">
                                  <b>Enter OTP</b>
                                </Label>
                                <Input
                                  placeholder="Enter OTP"
                                  id="username"
                                  className="btn-pill"
                                  type="text"
                                  onChange={handleUuidChange}
                                  required
                                />
                              </FormGroup>
                              <FormGroup className="form-row mt-3 mb-0">
                                <Button
                                  color="primary btn-block"
                                  onClick={handleVerifyUuidOnClick}
                                >
                                  Verify OTP
                                </Button>
                              </FormGroup>
                            </>
                          )}
                          {showPasswordChange && (
                            <>
                              <FormGroup>
                                <Label className="col-form-label">
                                  <b>Change Password</b>
                                </Label>
                                <br />
                                {/* style={{
                                    padding: 7,
                                    borderColor: "#efefef",
                                    borderWidth: "1px",
                                    color: "#898989",
                                  }} */}
                                <input
                                  placeholder="Enter new password"
                                  className="btn-pill"
                                  name="password"
                                  type="password"
                                  ref={register({
                                    minLength: {
                                      value: 8,
                                      message:
                                        "Password must have at least 8 characters",
                                    },
                                  })}
                                  onChange={(e) => {
                                    setnewPassword(e.target.value);
                                  }}
                                  required
                                />
                                {errors.password && (
                                  <p>{errors.password.message}</p>
                                )}
                                <br />
                                <Label className="col-form-label">
                                  <b>Repeat Password</b>
                                </Label>
                                <br />
                                {/* style={{
                                    padding: 7,
                                    borderColor: "#efefef",
                                    color: "#898989",
                                  }} */}
                                <input
                                  placeholder="Re-enter the password"
                                  name="password_repeat"
                                  className="btn-pill"
                                  type="password"
                                  ref={register({
                                    validate: (value) =>
                                      value === password.current ||
                                      "The passwords do not match",
                                  })}
                                  onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                  }}
                                  required
                                />
                                {errors.password_repeat && (
                                  <p>{errors.password_repeat.message}</p>
                                )}
                              </FormGroup>
                              <FormGroup className="form-row mt-3 mb-0">
                                <Button
                                  // type="submit"
                                  color="primary btn-block"
                                  onClick={handleSubmit(
                                    handleNewPasswordOnClick
                                  )}
                                >
                                  Change Password
                                </Button>
                              </FormGroup>
                            </>
                          )}
                          <div className="social mt-3"></div>
                        </Form>
                      </div>
                      <div className="sub-cont"></div>
                    </div>
                  </CardBody>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <!-- login page end--> */}
      </Container>
    </div>
  );
};

export default Emailsent;
