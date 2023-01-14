import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Fab, Toolbar } from "@mui/material";
import ScrollTop from "./components/ScrollToTop";
import ScrollToTop from "./Scroll";
import Header from "./components/Navbar";

function App(props) {
  // const a = 10;
  // a = 20;
  // console.log(a);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Toolbar id="back-to-top-anchor" style={{ minHeight: "unset" }} />
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
          </Routes>
          <ScrollTop {...props}>
            <Fab
              style={{ backgroundColor: "#212121" }}
              size="small"
              aria-label="scroll back to top"
            >
              <KeyboardDoubleArrowUpIcon style={{ color: "white" }} />
            </Fab>
          </ScrollTop>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
