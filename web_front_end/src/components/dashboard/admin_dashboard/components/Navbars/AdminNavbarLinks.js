import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Button from "../../components/CustomButtons/Button.js";
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { strings } from '../../../../../language/language';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";

import {
  LogoutAction,
  GetFeedbackAction,
  LanguageAction
} from '../../../../../redux-state-managment/Actions';
import {
  BACKENDURL
} from '../../../../../redux-state-managment/Constants';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles,InputBase } from '@material-ui/core';
const useStyles = makeStyles(styles);

const BootstrapInput = withStyles((theme) => ({
  root: {
      'label + &': {
          marginTop: theme.spacing(3),
      },
  },
  input: {
      borderRadius: 4,
      color: "black",
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '5px 26px 2px 22px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
          borderRadius: 4,
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
  },
}))(InputBase);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const [Lang, setLang] = React.useState('en');
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const feedbacks = useSelector((state) => state.SendFeedBackReducer.feedbacks);
  const token = useSelector(state => state.AccountReducer.token);
  const user = useSelector((state) => state.AccountReducer.user);
  React.useEffect(async () => {
    dispatch(GetFeedbackAction(token));
  }, [])
  return (
    <div>
      <div className={classes.manager}>
      <FormControl >
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={Lang}
          color="primary"
          onChange={(e) => {
            strings.setLanguage(e.target.value);
            dispatch(LanguageAction(e.target.value))
            setLang(e.target.value)
          }}
          input={<BootstrapInput />}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="am">አማርኛ</MenuItem>
          <MenuItem value="or">Oromifa</MenuItem>
          <MenuItem value="ti">ትግርኛ</MenuItem>
          <MenuItem value="so">Somali</MenuItem>
        </Select>
      </FormControl>
      </div>
      {/* <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search,
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
            },
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div> */}
      {/* <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Dashboard className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Dashboard</p>
        </Hidden>
      </Button>
       */}
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>{feedbacks.length}</span>
          <Hidden mdUp implementation="css">
            <p onClick={handleCloseNotification} className={classes.linkText}>
              Feedback
            </p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    {
                      feedbacks.map((feedback, i) => (
                        <Link to="/admin/feedback">
                          <MenuItem
                            onClick={handleCloseNotification}
                            className={classes.dropdownItem}
                          >
                            {feedback.feedback}
                          </MenuItem>
                        </Link>
                      ))
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>

      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <Link to="/admin/profile">
                      <MenuItem
                        onClick={handleCloseProfile}
                        className={classes.dropdownItem}
                      >
                        Profile
                      </MenuItem>
                    </Link>

                    {/* <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      Settings
                    </MenuItem> */}
                    <Divider light />
                    <MenuItem
                      onClick={() => {
                        if (token) {
                          dispatch(LogoutAction());
                        }
                      }}
                      className={classes.dropdownItem}

                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>

      </div>

      <span className={classes.manager}>
        Admin
      </span>
      <div className={classes.manager}>
        <Avatar src={`${BACKENDURL}/users/${user.profileImage}`}>
        </Avatar>
      </div>
    </div>
  );
}
