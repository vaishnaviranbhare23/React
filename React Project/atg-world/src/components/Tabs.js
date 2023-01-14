import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { JwelleryCard } from "./JwelleryCard";
import { JwelleryCaraousel } from "./JwelleryCaraousel";
import { headerStyle } from "../utils";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { borderRight } from "@mui/system";
import { Grid, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme();

  const scrollableTabs = useMediaQuery(theme.breakpoints.down("sm"));
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontSize: "20px",
      border: "2px solid #ebebeb",
      color: "#000000",

      "&.Mui-selected": {
        color: "#c09578",
        border: "2px solid #c09578",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#c09578",
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          variant={scrollableTabs ? "scrollable" : "standard"}
          scrollButtons="on"
          centered={!scrollableTabs}
          value={value}
          // variant="scrollable"
          // scrollButtons="auto"
          // centered
          aria-label="styled tabs example"
          onChange={handleChange}
        >
          <StyledTab style={headerStyle} label="Workflows" />
          <StyledTab style={headerStyle} label="Datasets" />
          <StyledTab style={headerStyle} label="Connections" />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <JwelleryCaraousel deviceType="vdncsdj" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JwelleryCaraousel deviceType="vdncsdj" bestSell={true} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JwelleryCaraousel deviceType="vdncsdj" bestSell={true} />
      </TabPanel>
    </Box>
  );
}
