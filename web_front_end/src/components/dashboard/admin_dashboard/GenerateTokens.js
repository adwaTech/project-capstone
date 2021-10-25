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
import { useDispatch, useSelector } from 'react-redux'
import {
  generateTokenAction

} from '../../../redux-state-managment/Actions';
import Button from "./components/CustomButtons/Button.js";
import Button1 from '@material-ui/core/Button';
import { FileCopy } from '@material-ui/icons'
import styles from "./iconsStyle.js";
import CopyToClipboard from 'react-copy-to-clipboard'

const useStyles = makeStyles(styles);

export default function Icons() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AccountReducer.token);
  const generatedToken = useSelector((state) => state.GenerateTokenReducer.generate_token);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="info">
            <h4 className={classes.cardTitleWhite}>Generate Token</h4>
            <p className={classes.cardCategoryWhite}>
                for new admin user
              {/* <a
                href="#"
                target="_blank"
              >

              </a> */}
            </p>
          </CardHeader>
          
          <CardBody>
            <Button
              color="info"
              onClick={() => {
                dispatch(generateTokenAction(token));
              }}
            >
              Generate Token
            </Button>
            <div style={{
              marginTop: "40px"
            }}>
              {generatedToken}

              <CopyToClipboard text={generatedToken} >
                <Button1
                  color="primary"
                ><FileCopy />Copy</Button1>
              </CopyToClipboard>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
