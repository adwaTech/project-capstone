import React from "react";
import { 
  Switch, 
  Route, 
  Redirect 
} from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbars/Navbar";
// import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
// import FixedPlugin from "./components/FixedPlugin/FixedPlugin";

import routes from "./routes";

import styles from "./adminStyle";

import bgImage from "../../../assets/images/bird-wallpaper-1366x768-002.jpg";
import logo from "../../../assets/images/bird-wallpaper-1366x768-002.jpg";
import { strings } from "../../../language/language";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  const classes = useStyles();
  const mainPanel = React.createRef();
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      // document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  React.useEffect(()=>{

  },[strings])
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"M3K Auction"}
        logo={logo}
        
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest} 
        />
        
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
