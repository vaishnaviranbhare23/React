import React, { Fragment, useState, Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { FacebookProvider, Like } from 'react-facebook';
import UserTable from "./usertable";
import EnhancedTable from './enhancedtable'

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Media,
  //Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { MoreHorizontal } from "react-feather";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import TableStats from "./tablestats";
import GMap from "./gMap";
import { Select } from "@material-ui/core";

class CombinedView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
      pic: '',
      tabletype: ''
    }
  }

  handlePicChange = event => {
		this.setState({
			pic: event.target.value
		})
	}


  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      //[name]: value;
      tabletype: value
    });
  };

  handleSubmit = event => {
		//alert(`${this.state.pic} ${this.state.tabletype}`)
    var picname = this.state.pic
    var tablename = this.state.tabletype

    if(picname=='IIT Bombay' && tablename =='Nodalcentres')
    {
      this.setState({
        message: <UserTable />
      })
    }
    else
    {
      this.setState({
        message: <EnhancedTable />
      })
    }

   
		event.preventDefault()
	}

  render() {
    const { pic, tabletype } = this.state

//const DefaultCustom = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col xl="12 xl-100 box-col-12">
            <Card className="year-overview">
              <CardHeader className="no-border d-flex">
                <h5>Combined View</h5>
                <ul className="creative-dots">
                  <li className="bg-primary big-dot"></li>
                  <li className="bg-secondary semi-big-dot"></li>
                  <li className="bg-warning medium-dot"></li>
                  <li className="bg-info semi-medium-dot"></li>
                  <li className="bg-secondary semi-small-dot"></li>
                  <li className="bg-primary small-dot"></li>
                </ul>
              </CardHeader>

              <CardBody>
                <Row>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-1"><Label style={{fontSize:'16px'}}>Select PIC</Label></div>
                      <div className="col-md-3">
                        <FormGroup>
                          <Select value={pic} onChange={this.handlePicChange} style={{width:'70%'}}>
                            <option value="IIT Bombay">IIT Bombay</option>
                            <option value="IIT Delhi">IIT Delhi</option>
                            <option value="IIT Guwahati">IIT Guwahati</option>
                            <option value="IIT Roorkee">IIT Roorkee</option>
                            <option value="Amrita Vishwa Vidyapeetham">Amrita Vishwa Vidyapeetham</option>
                          </Select>
                        </FormGroup>
                      </div>
                      <div className="col-md-3">
                        <FormGroup className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                          <div className="radio radio-primary">
                            <Input
                              id="radioinline1"
                              type="radio"
                              name="tabletype"
                              value="Nodalcentres"
                              onChange={this.handleChange}
                              //defaultChecked
                            />
                            <Label className="mb-0" for="radioinline1">
                              <span className="digits"> Nodal Centres </span>
                            </Label>
                          </div>
                          <div className="radio radio-primary">
                            <Input
                              id="radioinline2"
                              type="radio"
                              name="tabletype"
                              value="Workshops"
                              onChange={this.handleChange}
                            />
                            <Label className="mb-0" for="radioinline2">
                              <span className="digits"> Workshops </span>
                            </Label>
                          </div>
                        </FormGroup>
                      </div>
                      <div className="col-md-3">
                        <Button outline color="primary-2x" type="submit"> View </Button>
                      </div>
                    </div>
                    
                    </form>
                </Row>
                  {this.state.message}
              </CardBody>  
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
};
export default CombinedView;
