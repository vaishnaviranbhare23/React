import "./Header.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header({ countries, country, getCountryCode }) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light shadow-sm bgNav">
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img
                className="nav__logo"
                src="https://img.icons8.com/ultraviolet/40/000000/coronavirus.png"
              />
              <span className="nav__title"> COVID-19 Tracker</span>
            </a>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <FormControl>
                <Select
                  variant="outlined"
                  onChange={getCountryCode}
                  value={country}
                >
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                  {countries.map((country) => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Link to="/symptoms">
                <li
                  className="nav-item"
                  style={{ marginLeft: 20, marginTop: 5 }}
                >
                  <a className="nav-link" href="#">
                    Symptoms
                  </a>
                </li>
              </Link>
              <Link to="/precautions">
                <li
                  className="nav-item"
                  style={{ marginLeft: 20, marginTop: 5 }}
                >
                  <a className="nav-link" href="#">
                    Precautions
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
