import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";

import GridItem from "./main_dashbaord/Grid/GridItem.js";
import GridContainer from "./main_dashbaord/Grid/GridContainer.js";
import CustomInput from "./components/CustomInput/CustomInput.js";
import Button from "./components/CustomButtons/Button.js";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardAvatar
} from './Cards'



import avatar from '../../../assets/assets/img/faces/marc.jpg';

const styles = {
  // cardCategoryWhite: {
  //   color: "rgba(255,255,255,1)",
  //   margin: "0",
  //   fontSize: "14px",
  //   marginTop: "0",
  //   marginBottom: "0",
  // },
  // cardTitleWhite: {
  //   color: "#FFFFFF",
  //   marginTop: "0px",
  //   minHeight: "auto",
  //   fontWeight: "300",
  //   fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  //   marginBottom: "3px",
  //   textDecoration: "none",
  // },
};

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    usertype: "customer",
    password: "",
    conpassword: "",
    firstname: props.data.firstname,
    lastname: props.data.lastname,
    idNumber: props.data.idNumber,
    idPhoto: props.data.idPhoto,
    sex: "male",
    phone: props.data.phone,
    email: props.data.email,
    profileImage: props.data.profileImage,
    city: props.data.city,
    latitute: props.data.latitude,
    longitute: props.data.longtude,
  })
  return (
    <div >
      <GridContainer >
        <GridItem xs={12} sm={12} md={8}>
          <Card style={{ backgroundColor: "#ffffff", }}>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Edit your profile</p>
            </CardHeader>
            <CardBody >
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="firstname"
                    id="company-disabled"
                    value={state.firstname}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="last name"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>
             */}
            </CardBody>
            <CardFooter>
              <Button color="info">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        {
          props.data ? null :
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves Kanye
                    I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button color="info" round>
                    Follow
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
        }
      </GridContainer>
    </div>
  );
}
