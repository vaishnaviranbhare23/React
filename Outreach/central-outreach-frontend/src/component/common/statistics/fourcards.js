import React, { Fragment, useState, useEffect } from "react";
// import Breadcrumb from "../../common/breadcrumb/breadcrumb";
// import { TwitterTimelineEmbed } from "react-twitter-embed";
// import { FacebookProvider, Like } from "react-facebook";
import axiosInstance from "../../../axiosAPI";
// import FourCards from "../../common/statistics/fourcards";

import {
  // Container,
  Row,
  Col,
  Card,
  // CardHeader,
  CardBody,
  // Media,
  //Table,
  // Button,
  // Modal,
  // ModalHeader,
  // ModalBody,
} from "reactstrap";
// import { MoreHorizontal } from "react-feather";
import Slider from "react-slick";

// import PropTypes from "prop-types";
// import EnhancedTable from "./enhancedtable";
// import TableStats from "./tablestats";
// import GMap from "./gMap";
import store from "../../../store";
import {
  SET_CARDS_DATA,
  SET_CARD_STATS_DATA_RECEIVED,
} from "../../../redux/actionType";

function FourCards() {
  const [dataDict, setDataDict] = useState({
    no_workshops: 0,
    no_participants: 0,
    no_ncs: 0,
    no_usage: 0,
  });

  const parseAndSetData = async (data) => {
    /*
    data dictionary mapping
    data = {
      "no_workshops":0,
      "no_participants";0,
      "no_ncs";0,
      "no_usage";0,
    }
    */
    // console.log(data);
    for (var key in data) {
      if (data[key] > 99999) {
        data[key] = parseFloat(data[key] / 100000).toFixed(2) + "L";
      } else if (data[key] > 999) {
        data[key] = parseFloat(data[key] / 1000).toFixed(2) + "K";
      } else {
        data[key] = data[key];
      }
    }

    setDataDict(data);
    await store.dispatch({
      type: SET_CARDS_DATA,
      payload: { ...data },
    });

    await store.dispatch({
      type: SET_CARD_STATS_DATA_RECEIVED,
    });
    // console.log(dataDict);
  };

  const fetchData = async () => {
    const res = axiosInstance.get("api/");
    const data = await (await res).data;
    // console.log(data);

    return data;
  };

  const getData = async () => {
    const data = await fetchData();
    parseAndSetData(data);
  };
  useEffect(() => {
    const statisticsState = store.getState().Statistics;
    if (!statisticsState.dataReceived) {
      getData();
    } else {
      setDataDict({ ...statisticsState });
      console.log("already had data, not asking from server");
    }
  }, []);
  return (
    <div>
      <Row className="ecommerce-chart-card">
        <Col xl="3 box-col-6" lg="6" md="6">
          <Card className="o-hidden statscarddark">
            <CardBody className="crypto-graph-card-cop coin-card">
              <div className="media">
                <div className="media-body d-flex align-items-center">
                  <div className="rounded-icon">
                    <i className="icofont icofont-users-alt-3"></i>
                  </div>
                  <div className="bitcoin-graph-content">
                    <h5 className="f-w-700 mb-0" style={{ color: "#fff" }}>
                      {" "}
                      Participants
                    </h5>
                  </div>
                </div>
                <div className="right-setting d-flex align-items-center">
                  <h3 className="font f-w-700 mb-0" style={{ color: "#fff" }}>
                    {dataDict["no_participants"]}
                  </h3>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl="3 box-col-6" lg="6" md="6">
          <Card className="o-hidden statscardlight">
            <CardBody className="crypto-graph-card-cop coin-card">
              <div className="media">
                <div className="media-body d-flex align-items-center">
                  <div className="rounded-icon">
                    <i className="icofont icofont-building-alt ilight"></i>
                  </div>
                  <div className="bitcoin-graph-content">
                    <h5 className="f-w-700 mb-0" style={{ color: "#fff" }}>
                      Nodal Centres
                    </h5>
                  </div>
                </div>
                <div className="right-setting d-flex align-items-center">
                  <h3 className="font f-w-700 mb-0" style={{ color: "#fff" }}>
                    {dataDict["no_ncs"]}
                  </h3>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl="3 box-col-6" lg="6" md="6">
          <Card className="o-hidden statscarddark">
            <CardBody className="crypto-graph-card-cop coin-card">
              <div className="media">
                <div className="media-body d-flex align-items-center">
                  <div className="rounded-icon">
                    <i className="icofont icofont-certificate-alt-1"></i>
                  </div>
                  <div className="bitcoin-graph-content">
                    <h5 className="f-w-700 mb-0" style={{ color: "#fff" }}>
                      {" "}
                      Workshops{" "}
                    </h5>
                  </div>
                </div>
                <div className="right-setting d-flex align-items-center">
                  <h3 className="font f-w-700 mb-0" style={{ color: "#fff" }}>
                    {dataDict["no_workshops"]}
                  </h3>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl="3 box-col-6" lg="6" md="6">
          <Card className="o-hidden statscardlight">
            <CardBody className="crypto-graph-card-cop coin-card">
              <div className="media">
                <div className="media-body d-flex align-items-center">
                  <div className="rounded-icon">
                    <i className="icofont icofont-paper ilight"></i>
                  </div>
                  <div className="bitcoin-graph-content">
                    <h5 className="f-w-700 mb-0" style={{ color: "#fff" }}>
                      Total Usage
                    </h5>
                  </div>
                </div>
                <div className="right-setting d-flex align-items-center">
                  <h3 className="font f-w-700 mb-0" style={{ color: "#fff" }}>
                    {dataDict["no_usage"]}
                  </h3>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FourCards;
