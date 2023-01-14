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

const Thankyou = (props) => {

  const toggleform = () => {
    document.querySelector(".cont").classList.toggle("s--signup");
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
                          <h3>Your password has been reset successfully.</h3>
                        </FormGroup>
                        
                        <FormGroup className="form-row mt-3 mb-0">
                          
                        </FormGroup>
                        <div className="social mt-3">
                          
                        </div>
                      </Form>
                    </div>
                    <div className="sub-cont">
                      
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

export default Thankyou;
