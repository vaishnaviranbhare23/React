import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = (props) => {
  return (
    <footer className="footer" style={{backgroundColor: '#afafaf'}}>
      <Container fluid={true} style={{paddingLeft: '10%', paddingTop: '2%', paddingBottom: '2%'}}>
        <table>
          <thead>
            <tr>
              <th style={{width: '50%'}}><h5><strong> USEFUL LINKS </strong></h5></th>
              <th><h5><strong> CONTACT US </strong></h5></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a target="_blank" href="https://plus.google.com/communities/104131148292250423165"> <p className="mb-0" style={{fontSize: '18px'}}>Teacher's Community</p> </a></td>
              <td><p style={{fontSize: '18px'}}> <span><i className= "icon-world"></i></span> support@vlab.co.in</p></td>
            </tr>
            <tr>
              <td><a target="_blank" href="http://vlabs.iiit.ac.in/workshops.html"><p className="mb-0" style={{fontSize: '18px'}}>Expression of Interest for Workshop</p> </a></td>
              <td><p className="mb-0" style={{fontSize: '18px'}}> <span><i className= "icon-mobile"></i></span> Phone(L) - 011-26582050</p></td>
            </tr>
            <tr>
              <td><a target="_blank" href="http://vlabs.iiit.ac.in/faq/faq-eoi.html"><p className="mb-0" style={{fontSize: '18px'}}>Workshop FAQ</p> </a></td>
              <td><p className="mb-0" style={{fontSize: '18px'}}> <span><i className="icofont icofont-location-pin"></i></span> Wireless Research Lab, Room No - 206/IIA, Bharti School of Telecom, Indian Institute of Technology Delhi, Hauz Khas, New Delhi-110016</p></td>
            </tr>
            <tr>
              <td><a target="_blank" href="http://vlabs.iiit.ac.in/faq-vlabs.html"><p className="mb-0" style={{fontSize: '18px'}}>FAQ</p> </a></td>
              <td></td>
            </tr>
            <tr>
              <td><a target="_blank" href="https://sakshat.ac.in/"><p className="mb-0" style={{fontSize: '18px'}}>Sakshat Portal</p> </a></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Container>
    </footer>
  );
};

export default Footer;
