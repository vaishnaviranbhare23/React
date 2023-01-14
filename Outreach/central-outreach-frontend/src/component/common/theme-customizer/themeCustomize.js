import React, { Fragment, useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import {
  NavLink,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import {
  ADD_LAYOUT,
  ADD_COLOR,
  ADD_MIXlAYOUT,
  ADD_COSTOMIZER,
  ROUTER_ANIMATION,
  ADD_SIDEBAR_TYPES,
} from "../../../redux/actionType";
const ThemeCustomize = (props) => {

  const configDB = useSelector((content) => content.Customizer.customizer);
  const [showHorizontal, setShowHorizontal] = useState(true);
  const [boxLayout, setBoxLayout] = useState(true);
  const [modal, setModal] = useState();
  const [activeTab1, setActiveTab1] = useState("1");
  const [rightSidebar, setRightSidebar] = useState(true);
  const [layout_type, setLayout_type] = useState(configDB.settings.layout_type);
  const mix_layout = configDB.color.mix_layout;
  const primary_color = localStorage.getItem("primary_color");
  const secondary_color = localStorage.getItem("secondary_color");
  const layout_version = localStorage.getItem("layout_version");
  const layout_animation = localStorage.getItem("animation");
  const color = localStorage.getItem("color");
  const config_primary = configDB.color.primary_color;
  const config_secondary = configDB.color.secondary_color;
  const config_color = configDB.color.color;
  const config_layout_version = configDB.color.layout_version;
  const sidebar_type = configDB.settings.sidebar.type;

  const dispatch = useDispatch();

  //set layout_type
  document.body.setAttribute("main-theme-layout", layout_type);
  document.documentElement.dir = layout_type;

  useEffect(() => {
    dispatch({ type: ADD_COSTOMIZER });

    dispatch({
      type: ADD_COLOR,
      payload: {
        color,
        primary_color,
        secondary_color,
        layout_version,
      },
    });
    dispatch({ type: ROUTER_ANIMATION, payload: layout_animation });

    //set sidebar_type
    document.querySelector(".page-wrapper").className =
      "page-wrapper " + sidebar_type;
    // mix_layout type
    if (mix_layout === "default") {
      document.body.className = layout_version;
    } else {
      document.body.className = mix_layout;
    }
    document.body.className = layout_version;

    if (
      localStorage.getItem("primary_color") == null ||
      localStorage.getItem("secondary_color") == null ||
      localStorage.getItem("color") == null ||
      localStorage.getItem("layout_version") == null
    ) {
      document.documentElement.className = config_color;
      localStorage.setItem("primary_color", config_primary);
      localStorage.setItem("secondary_color", config_secondary);
      localStorage.setItem("color", config_color);
      localStorage.setItem("layout_version", config_layout_version);
      dispatch({
        type: ADD_COLOR,
        payload: {
          color: config_color,
          primary_color: config_primary,
          secondary_color: config_secondary,
          layout_version: config_layout_version,
        },
      });
    }

    // eslint-disable-next-line
  }, [dispatch]);

  const toggle = () => {
    setModal(!modal);
  };

  const openCustomizer = () => {
    if (rightSidebar) {
      setRightSidebar(!rightSidebar);
      document.querySelector(".customizer-contain").classList.add("open");
      document.querySelector(".customizer-links").classList.add("open");
    }
  };

  const closeCustomizer = () => {
    setRightSidebar(!rightSidebar);
    document.querySelector(".customizer-contain").classList.remove("open");
    document.querySelector(".customizer-links").classList.remove("open");
  };

  const handleLayout = (layout) => {
    setLayout_type(layout);
    setShowHorizontal(true)
    setBoxLayout(true)
    document.querySelectorAll(".main-layout li").forEach((item) => {
      item.classList.remove("active");
    });

    document.body.setAttribute("main-theme-layout", layout);
    document.documentElement.dir = layout;

    if (layout === "box-layout") {
      setShowHorizontal(false)
    }

    dispatch({ type: ADD_LAYOUT, payload: layout });
  };

  const handleCustomizerMix = (e) => {
    e.preventDefault();
    document.querySelectorAll(".customizer-mix li").forEach((item) => {
      item.classList.remove("active");
    });
    document.body.className = e.currentTarget.getAttribute("data-attr");
    e.currentTarget.classList.add("active");
    dispatch({
      type: ADD_MIXlAYOUT,
      payload: e.currentTarget.getAttribute("data-attr"),
    });
  };

  const colorChangeTheme = (value) => {
    if (value === "color-1") {
      localStorage.setItem("color", "color-1");
      localStorage.setItem("layout_version", "light");
      localStorage.setItem("primary_color", "#7e37d8");
      localStorage.setItem("secondary_color", "#fe80b2");
    }
    if (value === "color-2") {
      localStorage.setItem("color", "color-2");
      localStorage.setItem("layout_version", "light");
      localStorage.setItem("primary_color", "#ff4c3b");
      localStorage.setItem("secondary_color", "#26c6da");
    }
    if (value === "color-3") {
      localStorage.setItem("color", "color-3");
      localStorage.setItem("layout_version", "light");
      localStorage.setItem("primary_color", "#d64dcf");
      localStorage.setItem("secondary_color", "#8e24aa");
    }
    if (value === "color-4") {
      localStorage.setItem("color", "color-4");
      localStorage.setItem("layout_version", "light");
      localStorage.setItem("primary_color", "#4c2fbf");
      localStorage.setItem("secondary_color", "#2e9de4");
    }
    if (value === "color-5") {
      localStorage.setItem("color", "color-5");
      localStorage.setItem("layout_version", "light");
      localStorage.setItem("primary_color", "#7c4dff");
      localStorage.setItem("secondary_color", "#7b1fa2");
    }
    if (value === "color-6") {
      localStorage.setItem("color", "color-6");
      localStorage.setItem("layout_version", "light");
      localStorage.setItem("primary_color", "#3949ab");
      localStorage.setItem("secondary_color", "#4fc3f7");
    }
    if (value === "dark-1") {
      localStorage.setItem("color", "color-1");
      localStorage.setItem("layout_version", "dark-only");
      localStorage.setItem("primary_color", "#7e37d8");
      localStorage.setItem("secondary_color", "#fe80b2");
    }
    if (value === "dark-2") {
      localStorage.setItem("layout_version", "dark-only");
      localStorage.setItem("primary_color", "#ff4c3b");
      localStorage.setItem("secondary_color", "#26c6da");
      localStorage.setItem("color", "color-2");
    }
    if (value === "dark-3") {
      localStorage.setItem("layout_version", "dark-only");
      localStorage.setItem("primary_color", "#d64dcf");
      localStorage.setItem("secondary_color", "#8e24aa");
      localStorage.setItem("color", "color-3");
    }
    if (value === "dark-4") {
      localStorage.setItem("layout_version", "dark-only");
      localStorage.setItem("primary_color", "#4c2fbf");
      localStorage.setItem("secondary_color", "#2e9de4");
      localStorage.setItem("color", "color-4");
    }
    if (value === "dark-5") {
      localStorage.setItem("layout_version", "dark-only");
      localStorage.setItem("primary_color", "#7c4dff");
      localStorage.setItem("secondary_color", "#7b1fa2");
      localStorage.setItem("color", "color-5");
    }
    if (value === "dark-6") {
      localStorage.setItem("layout_version", "dark-only");
      localStorage.setItem("primary_color", "#3949ab");
      localStorage.setItem("secondary_color", "#4fc3f7");
      localStorage.setItem("color", "color-6");
    }
    window.location.reload();
  };

  const selectAnimation = (e) => {
    localStorage.setItem("animation", e.target.value);
    dispatch({ type: ROUTER_ANIMATION, payload: e.target.value });
    window.location.reload();
  };

  const handleSidebarType = (e, type) => {
    e.preventDefault();
    setBoxLayout(true)
    document.querySelectorAll(".sidebar-type li").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(".page-wrapper").className = "page-wrapper " + type;
    e.currentTarget.classList.add("active");
    
    if (type === "horizontal_sidebar") {
      setBoxLayout(false)
      document
        .querySelector(".iconsidebar-menu")
        .classList.remove("iconbar-second-close");
      document
        .querySelector(".iconsidebar-menu")
        .classList.remove("iconbar-mainmenu-close");
    }
    dispatch({ type: ADD_SIDEBAR_TYPES, payload: { type } });
  };

  return (
    <Fragment>
    </Fragment>
  );
};

export default ThemeCustomize;
