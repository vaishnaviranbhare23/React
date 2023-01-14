import React, { Fragment } from "react";
import Loader from "./component/common/loader/loader";
import Header from "./component/common/header/header";
import Sidebar from "./component/common/sidebar/sidebar";
import Rightsidebar from "./component/common/sidebar/rightsidebar";
import Footer from "./component/common/footer/footer";
import ThemeCustomize from "./component/common/theme-customizer/themeCustomize";
import Ecommerce from "./component/general/dashboard/ecommerce";
import { ToastContainer } from "react-toastify";

const App = ({ children }) => {
  return (
    <Fragment>
      <div className="page-wrapper" style={{ margin: 0 }}>
        <div className="page-body-wrapper">
          {/* <Header /> */}

          {/* <Rightsidebar /> */}
          <div className="page-body" style={{ margin: 0, padding: 0 }}>
            {children}
          </div>
          {/* <Sidebar/> */}
          <Footer style={{ width: "100%", paddingLeft: "100px" }} />
          <ThemeCustomize />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
