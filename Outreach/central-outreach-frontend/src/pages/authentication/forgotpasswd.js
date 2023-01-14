import React, { useState } from "react";
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
// eslint-disable-next-line
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import axiosInstance from "../../axiosAPI";
import { useSnackbar } from "notistack";

const Forgotpasswd = (props) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("ninth");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const toggleform = () => {
    document.querySelector(".cont").classList.toggle("s--signup");
  };

  const handleVerifyEmailOnClick = async () => {
    setLoading(true);

    try {
      const res = await axiosInstance.post("api/user/forgot/password/", {
        email: email,
        // username: userName,
      });
      console.log(res);
      redirect();
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Invalid Email Address", {
        variant: "error",
      });
    }
    setLoading(false);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  let history = useHistory();
  const redirect = () => {
    history.push("./emailsent");
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
                          <h2>RESET PASSWORD</h2>
                          <h6>Enter your registered email</h6>
                          {loading ? (
                            <div className="loader-box">
                              <div className="loader-10"></div>
                              <br />
                              <h6 style={{ padding: 20 }}>Please Wait..</h6>
                            </div>
                          ) : (
                            <>
                              <FormGroup>
                                <Input
                                  className="btn-pill"
                                  type="text"
                                  required=""
                                  onChange={handleEmailChange}
                                />
                              </FormGroup>

                              <FormGroup className="form-row mt-3 mb-0">
                                <Button
                                  color="primary btn-block"
                                  onClick={handleVerifyEmailOnClick}
                                >
                                  SEND
                                </Button>
                              </FormGroup>
                            </>
                          )}

                          <div className="social mt-3">
                            <Label style={{ color: "#fff" }}>.</Label>
                          </div>
                        </Form>
                      </div>
                      <div className="sub-cont">
                        <div className="img"></div>
                      </div>
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

export default Forgotpasswd;
