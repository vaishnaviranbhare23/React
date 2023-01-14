import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 5000,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 2000,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 30000,
  },
};
export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, caseType = "cases", color1) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[caseType].hex,
        fillColor: casesTypeColors[caseType].hex,
      }}
      radius={Math.sqrt(
        country[caseType] * 15 * casesTypeColors[caseType].multiplier
      )}
    >
      <Popup>
        <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info__name">{country.country}</div>
          <div className="info__confirmed">
            Cases:{numeral(country.cases).format("0,0")}
          </div>
          <div className="info__recovered">
            Recovered:{numeral(country.cases).format("0,0")}
          </div>
          <div className="info__deaths">
            Deaths:{numeral(country.cases).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
