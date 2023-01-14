import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function Copyright() {
  return (
    <Typography
      style={{ color: "rgba(0, 0, 0, 0.6)" }}
      variant="body2"
      align="center"
    >
      {"Copyright © "} {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://centraloutreach.vlabs.co.in/">
        VLabs MoE
      </Link>{" "}
      {"."} All rights reserved.
    </Typography>
  );
}
const Footer = (props) => {
  return (
    <>
      <Box sx={{ bgcolor: "#e7e7e7b8", p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Container style={{ fontFamily: "Roboto" }} fluid={true}>
          <Row>
            <Col
              md="4"
              // className="footer-copyright"
              style={{
                paddingLeft: "10%",
                // paddingTop: "2%",
                // paddingBottom: "2%",
              }}
            >
              <h5>
                <strong> USEFUL LINKS </strong>{" "}
              </h5>
              <a href="https://plus.google.com/communities/104131148292250423165">
                {" "}
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Teacher's Community
                </p>{" "}
              </a>
              <a href="http://vlabs.iiit.ac.in/workshops.html">
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Expression of Interest for Workshop
                </p>{" "}
              </a>
              <a href="http://vlabs.iiit.ac.in/workshops.html">
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Expression of Interest for Workshop
                </p>{" "}
              </a>
              <a href="http://vlabs.iiit.ac.in/faq/faq-eoi.html">
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Workshop FAQ
                </p>{" "}
              </a>
              <a href="http://vlabs.iiit.ac.in/faq-vlabs.html">
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  FAQ
                </p>{" "}
              </a>
              <a href="https://sakshat.ac.in/">
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Sakshat Portal
                </p>{" "}
              </a>
            </Col>

            <Col
              md="3"
              className="footer-copyright"
              style={{
                paddingRight: "10%",
                // paddingTop: "2%",
                // paddingBottom: "2%",
              }}
            >
              <h5>
                <strong> CONTACT US </strong>{" "}
              </h5>
              <p style={{ fontSize: "14px" }}>
                {" "}
                <span>
                  <i className="icon-world"></i>
                </span>{" "}
                support@vlab.co.in
              </p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                {" "}
                <span>
                  <i className="icon-mobile"></i>
                </span>{" "}
                Phone(L) - 011-26582050
              </p>
            </Col>
            <Col
              md="4"
              className="footer-copyright"
              style={{
                paddingRight: "10%",
                // paddingTop: "2%",
                // paddingBottom: "2%",
              }}
            >
              <h5>
                <strong> ADDRESS </strong>{" "}
              </h5>

              <p className="mb-0" style={{ fontSize: "14px" }}>
                {" "}
                <span>
                  <i className="icofont icofont-location-pin"></i>
                </span>{" "}
                Wireless Research Lab, Room No - 206/IIA, Bharti School of
                Telecom, Indian Institute of Technology Delhi, Hauz Khas, New
                Delhi-110016
              </p>
            </Col>
          </Row>
          <hr />
          <Copyright />
        </Container>
      </Box>
      {/* <footer className=" font-small" style={{ backgroundColor: "#afafaf" }}>
        <Container fluid={true}>
          <Row>
            <Col
              md="4"
              className="footer-copyright"
              style={{
                paddingLeft: "10%",
                paddingTop: "2%",
                paddingBottom: "2%",
              }}
            >
              <h5>
                <strong> USEFUL LINKS </strong>{" "}
              </h5>
              <a href="https://plus.google.com/communities/104131148292250423165">
                {" "}
                <p className="mb-0">Teacher's Community</p>{" "}
              </a>
              <a href="http://vlabs.iiit.ac.in/workshops.html">
                <p className="mb-0" style={{ fontSize: "18px" }}>
                  Expression of Interest for Workshop
                </p>{" "}
              </a>
              <a href="http://vlabs.iiit.ac.in/faq/faq-eoi.html">
                <p className="mb-0" style={{ fontSize: "18px" }}>
                  Workshop FAQ
                </p>{" "}
              </a>
              <a href="http://vlabs.iiit.ac.in/faq-vlabs.html">
                <p className="mb-0" style={{ fontSize: "18px" }}>
                  FAQ
                </p>{" "}
              </a>
              <a href="https://sakshat.ac.in/">
                <p className="mb-0" style={{ fontSize: "18px" }}>
                  Sakshat Portal
                </p>{" "}
              </a>
            </Col>
            <Col md="4" className="footer-copyright">
              <p className="mb-0"></p>
            </Col>
            <Col
              md="4"
              className="footer-copyright"
              style={{
                paddingRight: "10%",
                paddingTop: "2%",
                paddingBottom: "2%",
              }}
            >
              <h5>
                <strong> CONTACT US </strong>{" "}
              </h5>
              <p style={{ fontSize: "18px" }}>
                {" "}
                <span>
                  <i className="icon-world"></i>
                </span>{" "}
                support@vlab.co.in
              </p>
              <p className="mb-0" style={{ fontSize: "18px" }}>
                {" "}
                <span>
                  <i className="icon-mobile"></i>
                </span>{" "}
                Phone(L) - 011-26582050
              </p>
              <p className="mb-0" style={{ fontSize: "18px" }}>
                {" "}
                <span>
                  <i className="icofont icofont-location-pin"></i>
                </span>{" "}
                Wireless Research Lab, Room No - 206/IIA, Bharti School of
                Telecom, Indian Institute of Technology Delhi, Hauz Khas, New
                Delhi-110016
              </p>
            </Col>

            <Col
              md="4"
              className="footer-copyright"
              style={{ paddingLeft: "10%", paddingBottom: "2%" }}
            >
              <p>Copyright © 2021 VLabs MHRD. All rights reserved.</p>
            </Col>
            <Col md="4" className="footer-copyright">
              <p className="mb-0"></p>
            </Col>
            <Col
              md="4"
              className="footer-copyright"
              style={{ paddingRight: "10%", paddingBottom: "2%" }}
            >
              <p>Developed by IIT Bombay</p>
            </Col>

            {/* <Col md="6">
              <p className="pull-right mb-0">
                Hand-crafted & made with<i className="fa fa-heart"></i>
              </p>
            </Col> 
          </Row>
        </Container>
      </footer> */}
    </>
  );
};

export default Footer;
