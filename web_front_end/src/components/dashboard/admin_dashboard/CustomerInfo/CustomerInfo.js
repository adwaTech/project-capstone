import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import GridItem from "../main_dashbaord/Grid/GridItem.js";
import GridContainer from "../main_dashbaord/Grid/GridContainer.js";
import Danger from "../components/Typography/Danger.js";
import Success from "../components/Typography/Success.js";

import Button from "../components/CustomButtons/Button.js";
import {
    CardHeader,
    CardBody,
    Card,

} from '../Cards'

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
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar",
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit",
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    },
    "& td, & th": {
      display: "table-cell",
    },
  },
  center: {
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

export default function UpgradeToPro() {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>
              M3K Auction
            </h4>
            <p className={classes.cardCategoryWhite}>
            New Messages and feedback from customer
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.center}>Auctions</th>
                    <th className={classes.center}>Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Components</td>
                    <td className={classes.center}>30</td>
                    <td className={classes.center}>200</td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td className={classes.center}>2</td>
                    <td className={classes.center}>10</td>
                  </tr>
                  <tr>
                    <td>close</td>
                    <td className={classes.center}>7</td>
                    <td className={classes.center}>28</td>
                  </tr>
                  <tr>
                    <td>some thing here</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Customer Info</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Add Support</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>Document</td>
                    <td className={classes.center}>Managment</td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <Button round disabled>
                        27/21/21
                      </Button>
                    </td>
                    <td className={classes.center}>
                      <Button
                        round
                        color="danger"
                        href="#"
                      >
                        Approvment
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
