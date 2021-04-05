import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Gallery from "./gallery"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "whitesmoke"
  },
  iconStyle: {},
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      <AppBar position="static" color="default" style={{backgroundColor:"lightsteelblue"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Home"
            icon={<HomeIcon className={classes.iconStyle} />}
            {...a11yProps(0)}
          />
          <Tab label="Gallery" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Contact" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Info" icon={<InfoIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Gallery/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <About/>
      </TabPanel>
    </div>
  );
}
