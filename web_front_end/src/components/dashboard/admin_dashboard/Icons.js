/*eslint-disable*/
import React from "react";
// @material-ui/core ../../components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core ../../components
import GridItem from "./main_dashbaord/Grid/GridItem.js";
import GridContainer from "./main_dashbaord/Grid/GridContainer.js";
import Card from "./components/Card/Card.js";
import CardHeader from "./components/Card/CardHeader.js";
import CardBody from "./components/Card/CardBody.js";

import styles from "./iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="info">
            <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
            <p className={classes.cardCategoryWhite}>
              Handcrafted by our friends from{" "}
              <a
                href="#"
                target="_blank"
              >
                Google
              </a>
            </p>
          </CardHeader>
          <CardBody>
            <Hidden only={["sm", "xs"]}>
              <iframe
                className={classes.iframe}
                src="#"
                title="Icons iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]}>
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  The icons are visib
                  <a
                    href="#"
                    target="_blank"
                  >
                    Material Icons
                  </a>
                </h5>
              </GridItem>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
