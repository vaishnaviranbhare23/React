import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import Bookmark from "./bookmark";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import man from "../../../assets/images/dashboard/user.png";
// eslint-disable-next-line
import {
  AlignCenter,
  FileText,
  Activity,
  User,
  Clipboard,
  Anchor,
  Settings,
  LogOut,
  ThumbsUp,
  MessageCircle,
  MessageSquare,
  Maximize,
  Search,
  MoreHorizontal,
  Home,
} from "react-feather";
// import BasicDashboard from "../../general/dashboard/BasicDashboard";
import store from "../../../store/index";
import { Row, Col, Form, FormGroup, Button } from "reactstrap";
import { MENUITEMS } from "../sidebar/menu";
import { Link } from "react-router-dom";
import app from "../../../data/base";
import axiosInstance from "../../../axiosAPI";
import { useSnackbar } from "notistack";
import login from "../../../pages/authentication/isloggedin";

const Header = (props) => {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  // eslint-disable-next-line
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [searchValue, setsearchValue] = useState("");
  const [navmenu, setNavmenu] = useState(false);
  const [searchinput, setSearchinput] = useState(false);
  const [spinner, setspinner] = useState(false);
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState(false);
  // eslint-disable-next-line
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);
  const width = useWindowSize();

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setsearchValue("");
    }
  }, []);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL") || man);
    setName(localStorage.getItem("Name"));
    //document.querySelector(".iconsidebar-menu").classList.add('iconbar-second-close');
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, width]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const redirectToHomepage = () => {
    history.push(`/pages/login`);
  };

  const logOut = () => {
    var refresh = localStorage.getItem("refresh_token");

    localStorage.removeItem("profileURL");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    localStorage.clear();
    // app.auth().signOut();
    axiosInstance
      .post("/api/logout/", { refresh: refresh })
      .then((response) => {
        console.log(response);
        login.isloggedin = false;
        console.log("status login", login.isloggedin);
        console.log(localStorage.getItem("refresh_token"));
        enqueueSnackbar("Logged Out Successfully", {
          variant: "success",
        });
        // window.location.reload(false);
        redirectToHomepage("/");
      })

      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Logged Out ", {
          variant: "success",
        });
      });
    console.log();
    redirectToHomepage("/");
  };

  const handleSearchKeyword = (keyword) => {
    keyword ? addFix() : removeFix();
    const items = [];
    if (keyword.length > 0) {
      setsearchValue(keyword);
      setspinner(true);
      setTimeout(function () {
        setspinner(false);
      }, 1000);
    } else {
      setspinner(false);
    }
    mainmenu.filter((menuItems) => {
      if (
        menuItems.title.toLowerCase().includes(keyword) &&
        menuItems.type === "link"
      ) {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems) => {
        if (
          subItems.title.toLowerCase().includes(keyword) &&
          subItems.type === "link"
        ) {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter((suSubItems) => {
          if (suSubItems.title.toLowerCase().includes(keyword)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
          return suSubItems;
        });
        return subItems;
      });
      checkSearchResultEmpty(items);
      setsearchValue(items);
      return menuItems;
    });
  };

  const addFix = () => {
    setSearchResult(true);
    document.querySelector(".Typeahead-menu").classList.add("is-open");
    document.body.classList.add("offcanvas");
  };

  const removeFix = () => {
    setSearchResult(false);
    setsearchValue("");
    document.querySelector(".Typeahead-menu").classList.remove("is-open");
    document.body.classList.remove("offcanvas");
  };

  const checkSearchResultEmpty = (items) => {
    if (!items.length) {
      setSearchResultEmpty(true);
      document.querySelector(".empty-menu").classList.add("is-open");
    } else {
      setSearchResultEmpty(false);
      document.querySelector(".empty-menu").classList.remove("is-open");
    }
  };

  //full screen function
  const goFull = () => {
    const screen =
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen);
    console.log(screen);
    if (
      screen
      // (document.fullScreenElement && document.fullScreenElement !== null) ||
      // (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
        console.log(screen);
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        console.log(screen);
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  const Navmenuhideandshow = () => {
    if (navmenu) {
      setNavmenu(!navmenu);
      document.querySelector(".nav-menus").classList.add("open");
    } else {
      setNavmenu(!navmenu);
      document.querySelector(".nav-menus").classList.remove("open");
    }
  };

  const openCloseSearch = () => {
    if (searchinput) {
      setSearchinput(!searchinput);
      document.querySelector(".Typeahead-input").classList.add("open");
    } else {
      setSearchinput(!searchinput);
      document.querySelector(".Typeahead-input").classList.remove("open");
    }
  };

  let history = useHistory();

  const redirect = () => {
    history.push("/pages/login");
  };

  const redirectToDashBoard = () => {
    history.push(`/user/dashboard`);
  };

  return (
    <div className="page-main-header">
      <div className="main-header-right">
        <div className="main-header-left text-center">
          <div className="logo-wrapper">
            <Link to={"/"}>
              {/* <img
                src={require("../../../assets/images/logo/vlabs-mainsite-logo.png")}
                alt=""
                style={{height:'60px', width:'102px'}}
              /> */}
            </Link>
          </div>
        </div>
        <div className="mobile-sidebar">
          <div className="media-body text-right switch-sm">
            <label className="switch ml-3"></label>
          </div>
        </div>
        <div className="nav-right col pull-right right-menu">
          <ul className="nav-menus">
            <li>
              <a href={"https://centraloutreach.vlabs.co.in/"}>
                <img
                  src={require("../../../assets/images/logo/cop-logo.png")}
                  alt=""
                  style={{ height: "70px", width: "490px" }}
                />
              </a>
            </li>

            {/* <Bookmark /> */}
            <li>
              <img
                src={require("../../../assets/images/twitter-black-64px.png")}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </li>
            <li>
              <img
                src={require("../../../assets/images/facebook-black-64px.png")}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </li>
            <li>
              <img
                src={require("../../../assets/images/instagram-black-64px.png")}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </li>
            <li>
              <a
                className="text-dark"
                // href=""
                onClick={goFull}
              >
                <Maximize style={{ color: "#042e6f" }} />
              </a>
            </li>

            {!localStorage.getItem("refresh_token") ? (
              <li>
                <Button outline color="primary-2x" onClick={redirect}>
                  Login
                </Button>
              </li>
            ) : (
              <li>
                <Button outline color="primary-2x" onClick={logOut}>
                  Logout
                </Button>
              </li>
            )}

            {/* {login.isloggedin===false ? 
           
            ( 
              
              <li>
                <Button outline color="primary-2x" onClick={redirect}>
                  Login
                </Button>
              </li>
            ) : (
              !store.getState().Authdata.authenticated ? (<li>
                <Button outline color="primary-2x" onClick={redirect}>
                  Login
                </Button>
              </li>):(
           
              <li>
                <Button outline color="primary-2x" onClick={logOut}>
                  Logout
                </Button>
              </li>)
             
            )} */}
            {/* {!store.getState().Authdata.authenticated ?  */}

            {/* {!store.getState().Authdata.authenticated ? 
          
            ( 
             
              <li>
                <Button outline color="primary-2x" onClick={redirect}>
                  Login
                </Button>
              </li>
            ) : (
              
              <>
              
              <li>
                <Button outline color="primary-2x" onClick={logOut}>
                  Logout
                </Button>
              </li>
               
            
              </>
              
            )} */}

            <li>
              {/* <img
              // src={require("../../../assets/images/twitter-black-64px.png")}
              // alt=""
              // style={{height:'30px', width:'30px'}}
              /> */}
            </li>
          </ul>
          <div
            className="d-lg-none mobile-toggle pull-right"
            onClick={Navmenuhideandshow}
          >
            <MoreHorizontal />
          </div>
        </div>
        <script id="result-template" type="text/x-handlebars-template">
          <div className="ProfileCard u-cf">
            <div className="ProfileCard-avatar">
              <i className="pe-7s-home"></i>
            </div>
            <div className="ProfileCard-details">
              <div className="ProfileCard-realName"></div>
            </div>
          </div>
        </script>
        <script id="empty-template" type="text/x-handlebars-template">
          <div className="EmptyMessage">
            Your search turned up 0 results. This most likely means the backend
            is down, yikes!
          </div>
        </script>
      </div>
    </div>
  );
};

export default Header;
