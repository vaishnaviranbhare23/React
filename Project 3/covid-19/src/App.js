import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Infobox from "./Infobox";
import Map from "./Map";
import Table from "./Table";
import Symptoms from "./Symptoms";
import Precautions from "./Precautions";
import { prettyPrintStat, sortData } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";
import Img from "./images/st4.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [color, setColor] = useState("#ffffff");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [caseType, setCaseType] = useState("cases");
  //If empty array is provided then it means that the code will run only once when the component loads and not again
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
    console.log(typeof color);
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setCountries(countries);
          setTableData(sortedData);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  const getCountryCode = async (event) => {
    const countryCode = await event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //All the data of a particular country

        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        console.log(mapCenter);

        setMapZoom(4);
        console.log(mapZoom);
      });
  };
  console.log("countryiNFO >>>>", countryInfo);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/symptoms">
            <Header
              countries={countries}
              country={country}
              getCountryCode={getCountryCode}
            />
            <Symptoms />
          </Route>
          <Route path="/precautions">
            <Header
              countries={countries}
              country={country}
              getCountryCode={getCountryCode}
            />
            <Precautions />
          </Route>
          <Route path="/">
            <Header
              countries={countries}
              country={country}
              getCountryCode={getCountryCode}
            />

            <div className="app__stats row">
              <div className="cases__info col-3 mt-4">
                <Infobox
                  redBox={caseType === "cases"}
                  active={caseType === "cases"}
                  title="Coronavirus Cases"
                  total={prettyPrintStat(countryInfo.cases)}
                  cases={prettyPrintStat(countryInfo.todayCases)}
                  onClick={(e) => {
                    setCaseType("cases");
                    setColor("#7dd71d");
                    console.log(color);
                  }}
                />
                <Infobox
                  greenBox={caseType === "recovered"}
                  active={caseType === "recovered"}
                  title="Recovered"
                  total={prettyPrintStat(countryInfo.recovered)}
                  cases={prettyPrintStat(countryInfo.todayRecovered)}
                  onClick={(e) => {
                    setCaseType("recovered");
                  }}
                />
                <Infobox
                  blueBox={caseType === "deaths"}
                  active={caseType === "deaths"}
                  title="Deaths"
                  total={prettyPrintStat(countryInfo.deaths)}
                  cases={prettyPrintStat(countryInfo.todayDeaths)}
                  onClick={(e) => {
                    setCaseType("deaths");
                  }}
                />
              </div>
              <div className="cases__map col-9 mt-4">
                <Map
                  countries={mapCountries}
                  caseType={caseType}
                  center={mapCenter}
                  zoom={mapZoom}
                  color1={color}
                />
              </div>
            </div>

            <div className="quote m-5 row p-5 ">
              <div className="col-6">
                <h1>
                  There's nothing more important than our good health - that's
                  our principal capital.
                  <br />
                  <span style={{ fontSize: 20, marginLeft: 450 }}>
                    - Arlen Specter
                  </span>
                </h1>
                <br />
                <h2>So Stay At Home</h2>
              </div>
              <div className="col-6 ">
                <img className="img-fluid w-75 rounded ms-5" src={Img} />
              </div>
            </div>

            <div className="graph m-5 ">
              <div className="card bg-light cardGraph shadow">
                <div className="card-header text">
                  <strong>Worldwide new {caseType}</strong>
                </div>
                <div className="card-body">
                  <LineGraph caseType={caseType} />
                </div>
              </div>
            </div>

            <div className="cardGraph">
              <Table countries={tableData} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
