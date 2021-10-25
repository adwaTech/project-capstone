
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "./main_dashbaord/Grid/GridItem.js";
import GridContainer from "./main_dashbaord/Grid/GridContainer.js";
import SnackbarContent from "./components/Snackbar/SnackbarContent.js";
import { Feedback } from "@material-ui/icons";
import Info from "./components/Typography/Info"
import {

  GetFeedbackAction

} from '../../../redux-state-managment/Actions'
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';


import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from './Cards';
import styles1 from "./main_dashbaord/dashboardStyle";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1)

export default function Notifications() {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.SendFeedBackReducer.feedbacks);
  const token = useSelector((state) => state.AccountReducer.token);
  React.useEffect(() => {
    dispatch(GetFeedbackAction(token));
  }, [])
  const classes = useStyles();
  const classes1 = useStyles1();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  
  return (
    <Card>
      {console.log(feedbacks)}
      <CardHeader color="info">
        <h4 className={classes.cardTitleWhite}>Feedbacks from customers</h4>

      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Random user Feedbacks</h5>
            {
              feedbacks ?
                feedbacks.filter(f => f.userId === null).map(feedback => (
                  <Card >
                    <CardHeader stats icon>
                      <h3 className={classes1.cardTitle}>
                        <small>{feedback.date}</small>
                      </h3>
                      <p className={classes1.cardCategory} style={{
                        color:"black",
                        }}>From :{feedback.email} </p>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes1.stats}>
                        <Info>
                          <Feedback />
                        </Info>
                        <p style={{color:"black"}}>
                          {feedback.feedback}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>

                ))
                :
                <SnackbarContent
                  message={
                    `there is no registered user feedback yet`
                  }
                  close
                  color="info"
                />
            }



          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Register User Feedback</h5>
            <br />
            {
              feedbacks ?
                feedbacks.filter(f => f.userId !== null).map(feedback => (
                  <Card>
                    <CardHeader stats icon>
                      <h3 className={classes1.cardTitle}>
                        <small>{feedback.date}</small>
                      </h3>
                      <p className={classes1.cardCategory} style={{color:"black"}}>From :{feedback.email} </p>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes1.stats}>
                        <Info>
                          <Feedback />
                        </Info>
                        <p style={{color:"black"}}>
                          {feedback.feedback}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                )) :
                <SnackbarContent
                  message={
                    `there is no registered user feedback yet`
                  }
                  close
                  color="info"
                />
            }
          </GridItem>
        </GridContainer>
        <br />
        <br />
        {/* <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <h5>
              Notifications Places
              <br />
              <small>Click to view notifications</small>
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tl")}
                >
                  Top Left
                </Button>
                <Snackbar
                  place="tl"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to M3K Auctions."
                  open={tl}
                  closeNotification={() => setTL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tc")}
                >
                  Top Center
                </Button>
                <Snackbar
                  place="tc"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tr")}
                >
                  Top Right
                </Button>
                <Snackbar
                  place="tr"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bl")}
                >
                  Bottom Left
                </Button>
                <Snackbar
                  place="bl"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={bl}
                  closeNotification={() => setBL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bc")}
                >
                  Bottom Center
                </Button>
                <Snackbar
                  place="bc"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={bc}
                  closeNotification={() => setBC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("br")}
                >
                  Bottom Right
                </Button>
                <Snackbar
                  place="br"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={br}
                  closeNotification={() => setBR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
       */}
      </CardBody>
    </Card>
  );
}
