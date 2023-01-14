import React, { Fragment, useState, useReducer, useEffect } from "react";
import { Redirect } from "react-router";
import store from "../../../store/index";
import { Container, Row, Col, Card, CardHeader } from "reactstrap";
import FourCards from "../../common/statistics/fourcards";
import CombinedView from "./combinedview";
import BaseInput from "../../forms/form-control/baseInput";

import NCComponent from "./tables/iocncmaterial";
import WSComponent from "./tables/iocwsmaterial";
import WSFileComponent from "./tables/iocwsupload";
import Sidebar from "../../common/sidebar/sidebar";
import Header from "../../../component/common/header/header";
import axiosInstance from "../../../axiosAPI";
import { BaseUrl } from "../../../URLs";
import HeaderNew from "../../common/header/headerNew";

const initialState = {
  inputText: "null",
  pdf_url: "null",
  // wsfiledata: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        inputText: action.data,
      };
    case "UPDATE_PDF_URL":
      return {
        pdf_url: action.data,
      };

    default:
      return initialState;
  }
}
export const AppContext = React.createContext();

function BasicDashboard() {
  const authState = store.getState().Authdata;
  const [viewtable, setviewtable] = useState("ws");
  // const [receivedData, setReceivedData] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [ncData, setNcData] = useState([]);
  const [wsData, setWsData] = useState([]);
  const [wsFileData, setWsFileData] = useState([]);

  const lookDate = [];

  const fetchNcData = async () => {
    const response = await axiosInstance.get(BaseUrl + "api/dashboard/iocnc/");
    setNcData(response.data);
  };

  const fetchWsFileData = async () => {
    const response = await axiosInstance.get(
      BaseUrl + "api/dashboard/iocwsfile/"
    );
    // const d = response.data;
    setWsFileData(response.data);
  };

  useEffect(() => {
    console.log("Something set");
  }, [ncData, wsData, wsFileData]);

  const handleTableState = (id) => {
    setviewtable(id);
    console.log(viewtable);
  };

  // const tablenote="* If the date is in past ,kindly reload the page as the workshop will be added in the pending & approved table"

  return (
    <Fragment>
      <Header />
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Sidebar handleTableState={handleTableState} />

          <Container
            fluid={true}
            style={{ width: "100%", paddingLeft: "100px", marginTop: "140px" }}
          >
            <Row>
              <Col xl="12 xl-100 box-col-12">{/* <FourCards /> */}</Col>
            </Row>
            {viewtable === "profile" && (
              <Card
                id="profile"
                style={{ width: "50%", marginLeft: "26%", marginTop: "5%" }}
              >
                <CardHeader className="no-border">
                  <ul className="creative-dots">
                    <li className="bg-primary big-dot"></li>
                    <li className="semi-big-dot dotscard-semibig"></li>
                    <li className="medium-dot dotscard-medium"></li>
                    <li className="semi-medium-dot dotscard-semimedium"></li>
                    <li className="semi-small-dot dotscard-small"></li>
                    <li className="small-dot dotscard-semismall"></li>
                  </ul>

                  <h2 style={{ textAlign: "center" }}>
                    <span style={{ color: "#00baf2" }}>
                      {" "}
                      Hello {localStorage.getItem("first_name")}{" "}
                      {localStorage.getItem("last_name")} !!
                    </span>
                  </h2>
                  <h3 style={{ textAlign: "center" }}>
                    <span style={{ color: "#042e6f" }}>
                      {" "}
                      You have logged in as @{authState.user}
                    </span>
                  </h3>

                  <h3 style={{ textAlign: "center" }}>
                    <span style={{ color: "#042e6f" }}>
                      {" "}
                      Role : {authState.role}{" "}
                    </span>
                  </h3>
                  <h3 style={{ textAlign: "center" }}>
                    <span style={{ color: "#042e6f" }}>
                      {" "}
                      Email :{localStorage.getItem("email")}{" "}
                    </span>
                  </h3>
                  <h3 style={{ textAlign: "center" }}>
                    <span style={{ color: "#042e6f" }}>
                      {" "}
                      Phone number : {localStorage.getItem("phone_number")}{" "}
                    </span>
                  </h3>
                  <h3 style={{ textAlign: "center" }}>
                    <span style={{ color: "#042e6f" }}>
                      {" "}
                      Principal Institute : {localStorage.getItem("pi")}{" "}
                    </span>
                  </h3>
                </CardHeader>
              </Card>
            )}
            {viewtable === "nc" && (
              <Card id="nc" style={{ marginTop: 180, padding: 20 }}>
                <CardHeader className="no-border">
                  <ul className="creative-dots">
                    <li className="bg-primary big-dot"></li>
                    <li className="semi-big-dot dotscard-semibig"></li>
                    <li className="medium-dot dotscard-medium"></li>
                    <li className="semi-medium-dot dotscard-semimedium"></li>
                    <li className="semi-small-dot dotscard-small"></li>
                    <li className="small-dot dotscard-semismall"></li>
                  </ul>

                  <NCComponent ncData={ncData} setNcData={setNcData} />
                </CardHeader>
              </Card>
            )}
            {viewtable === "ws" && (
              <>
                <AppContext.Provider value={{ state, dispatch }}>
                  <Card id="ws" style={{ marginTop: 180, padding: 20 }}>
                    <CardHeader className="no-border">
                      <ul className="creative-dots">
                        <li className="bg-primary big-dot"></li>
                        <li className="semi-big-dot dotscard-semibig"></li>
                        <li className="medium-dot dotscard-medium"></li>
                        <li className="semi-medium-dot dotscard-semimedium"></li>
                        <li className="semi-small-dot dotscard-small"></li>
                        <li className="small-dot dotscard-semismall"></li>
                      </ul>
                      <WSComponent
                        ncData={ncData}
                        setNcData={setNcData}
                        wsData={wsData}
                        setWsData={setWsData}
                        wsFileData={wsFileData}
                        setWsFileData={setWsFileData}
                        lookDate={lookDate}
                      />
                    </CardHeader>
                  </Card>

                  <Card style={{ padding: 20 }}>
                    <CardHeader className="no-border">
                      <ul className="creative-dots">
                        <li className="bg-primary big-dot"></li>
                        <li className="semi-big-dot dotscard-semibig"></li>
                        <li className="medium-dot dotscard-medium"></li>
                        <li className="semi-medium-dot dotscard-semimedium"></li>
                        <li className="semi-small-dot dotscard-small"></li>
                        <li className="small-dot dotscard-semismall"></li>
                      </ul>
                      <WSFileComponent
                        wsData={wsData}
                        setWsData={setWsData}
                        wsFileData={wsFileData}
                        setWsFileData={setWsFileData}
                        lookDate={lookDate}
                      />
                    </CardHeader>
                  </Card>
                </AppContext.Provider>
              </>
            )}
          </Container>
        </div>
      </div>
    </Fragment>
    // <>
    //   {authState.authenticated ? (
    //     <div>
    //       <h1>
    //         Hello {authState.user} you last logged in {authState.lastLogin}{" "}
    //       </h1>
    //       <h3>This is your Dashboard</h3>
    //     </div>
    //   ) : (
    //     <Redirect to="/" />
    //   )}
    // </>
  );
}

export default BasicDashboard;
