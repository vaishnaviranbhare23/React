import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Like } from "react-facebook";
import FourCards from "../../common/statistics/fourcards";

import { Container, Row, Col, Card, CardHeader } from "reactstrap";
import { MoreHorizontal } from "react-feather";
import Slider from "react-slick";

import PropTypes from "prop-types";
import EnhancedTable from "./enhancedtable";
import TableStats from "./tablestats";
import GMap from "./gMap";

const Default = (props) => {
  // const [dataDict, setDataDict] = useState({
  //   no_workshops: 0,
  //   no_participants: 0,
  //   no_ncs: 0,
  //   no_usage: 0,
  // });

  // const parseAndSetData = async (data) => {
  //   /*
  //   data dictionary mapping
  //   data = {
  //     "no_workshops":0,
  //     "no_participants";0,
  //     "no_ncs";0,
  //     "no_usage";0,
  //   }
  //   */
  //   // console.log(data);
  //   for (var key in data) {
  //     if (data[key] > 99999) {
  //       data[key] = parseFloat(data[key] / 100000).toFixed(2) + "L";
  //     } else if (data[key] > 999) {
  //       data[key] = parseFloat(data[key] / 1000).toFixed(2) + "K";
  //     } else {
  //       data[key] = data[key];
  //     }
  //   }

  //   setDataDict(data);
  //   await store.dispatch({
  //     type: SET_CARDS_DATA,
  //     payload: { ...data },
  //   });

  //   await store.dispatch({
  //     type: SET_CARD_STATS_DATA_RECEIVED,
  //   });
  //   // console.log(dataDict);
  // };

  // const fetchData = async () => {
  //   const res = axiosInstance.get("api/");
  //   const data = await (await res).data;

  //   return data;
  // };

  // const getData = async () => {
  //   const data = await fetchData();
  //   parseAndSetData(data);
  // };
  // useEffect(() => {
  //   if (!store.getState().Statistics.dataReceived) {
  //     getData();
  //   } else {
  //     console.log("already had data, not asking from server");
  //   }
  // }, []);

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col lg="12 xl-100" style={{ marginTop: "-1%" }}>
            <FourCards />
          </Col>

          <Col xl="3 xl-100 box-col-12">
            <Card>
              <CardHeader className="no-border">
                <ul className="creative-dots">
                  <li className="bg-primary big-dot"></li>
                  <li className="semi-big-dot dotscard-semibig"></li>
                  <li className="medium-dot dotscard-medium"></li>
                  <li className="semi-medium-dot dotscard-semimedium"></li>
                  <li className="semi-small-dot dotscard-small"></li>
                  <li className="small-dot dotscard-semismall"></li>
                </ul>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVirtual-Labs-IIT-Delhi-301510159983871%2F&amp;tabs=timeline&amp;width=350&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    scrolling: "no",
                    allowtransparency: "true",
                    allow: "encrypted-media",
                    width: "350px",
                    height: "500px",
                    frameborder: "0px",
                  }}
                ></iframe>
              </CardHeader>
            </Card>
          </Col>

          <Col xl="6 xl-100 box-col-12">
            <Card>
              <CardHeader className="no-border">
                <ul className="creative-dots">
                  <li className="bg-primary big-dot"></li>
                  <li className="semi-big-dot dotscard-semibig"></li>
                  <li className="medium-dot dotscard-medium"></li>
                  <li className="semi-medium-dot dotscard-semimedium"></li>
                  <li className="semi-small-dot dotscard-small"></li>
                  <li className="small-dot dotscard-semismall"></li>
                </ul>
                {/* <GMap /> */}

                <iframe
                  style={{
                    width: "750px",
                    height: "480px",
                    frameborder: "0px",
                    scrolling: "no",
                    marginheight: "0px",
                    marginwidth: "0px",
                  }}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=66.69799804687501%2C19.528730138897643%2C84.30908203125001%2C28.48800520415948&amp;layer=mapnik"
                ></iframe>
                <br />
                <small>
                  <a href="https://www.openstreetmap.org/#map=7/24.087/75.504">
                    View Larger Map
                  </a>
                </small>
              </CardHeader>
            </Card>
          </Col>

          <Col xl="3 xl-100 box-col-12">
            <Card>
              <CardHeader className="no-border">
                <ul className="creative-dots">
                  <li className="bg-primary big-dot"></li>
                  <li className="semi-big-dot dotscard-semibig"></li>
                  <li className="medium-dot dotscard-medium"></li>
                  <li className="semi-medium-dot dotscard-semimedium"></li>
                  <li className="semi-small-dot dotscard-small"></li>
                  <li className="small-dot dotscard-semismall"></li>
                </ul>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="TheVirtual_Labs"
                  noHeader
                  noFooter
                  noBorders
                  options={{ height: 500, width: 350 }}
                />
              </CardHeader>
            </Card>
          </Col>

          <Col xl="12 xl-100 box-col-12">
            <Card className="year-overview">
              <CardHeader className="no-border d-flex">
                <h5>Upcoming Workshops</h5>
                <ul className="creative-dots">
                  <li className="bg-primary big-dot"></li>
                  <li className="semi-big-dot dotscard-semibig"></li>
                  <li className="medium-dot dotscard-medium"></li>
                  <li className="semi-medium-dot dotscard-semimedium"></li>
                  <li className="semi-small-dot dotscard-small"></li>
                  <li className="small-dot dotscard-semismall"></li>
                </ul>
              </CardHeader>
              <EnhancedTable />
            </Card>
          </Col>

          <Col xl="12 xl-100 box-col-12">
            <Card className="year-overview">
              <CardHeader className="no-border d-flex">
                <h5>Overview</h5>
                <ul className="creative-dots">
                  <li className="bg-primary big-dot"></li>
                  <li className="semi-big-dot dotscard-semibig"></li>
                  <li className="medium-dot dotscard-medium"></li>
                  <li className="semi-medium-dot dotscard-semimedium"></li>
                  <li className="semi-small-dot dotscard-small"></li>
                  <li className="small-dot dotscard-semismall"></li>
                </ul>
              </CardHeader>
              <TableStats />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Default;
