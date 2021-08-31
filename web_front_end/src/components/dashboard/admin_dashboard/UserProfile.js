import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";

import GridItem from "./main_dashbaord/Grid/GridItem.js";
import GridContainer from "./main_dashbaord/Grid/GridContainer.js";
import CustomInput from "./components/CustomInput/CustomInput.js";
import Button from "./components/CustomButtons/Button.js";
import Button1 from '@material-ui/core/Button'
import MapPicker from 'react-google-map-picker';
import { FileUploader } from "react-drag-drop-files";
import { useSelector, useDispatch } from "react-redux";
import Alert from '@material-ui/lab/Alert'

import {
  UpdateCustomerAction,
  AccountCheckoutAction
} from '../../../redux-state-managment/Actions'



import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardAvatar
} from './Cards'



import avatar from '../../../assets/assets/img/faces/marc.jpg';
import { Dialog } from "@material-ui/core";
const fileTypes = ["jpg", "png", "gif", 'jpeg'];

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
  const dispatch = useDispatch();

  const classes = useStyles();
  const [state, setState] = React.useState({
    usertype: "customer",
    password: "",
    conpassword: "",
    firstname: props.data.firstName,
    lastname: props.data.lastName,
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
  const [open, setOpen] = React.useState(false);
  const [zoom, setZoom] = React.useState(10);
  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
    setState({ ...state, zoom: newZoom });
  }

  const token = useSelector((state) => state.AccountReducer.token);
  const error = useSelector((state) => state.AccountReducer.error);
  const user = useSelector((state) => state.AccountReducer.user);

  const [progress,setProgress]=React.useState(false);
  React.useEffect(() => {
    if (error) {
      setProgress(false);
    }
  }, [error]);
  return (
    <div >
      <GridContainer >
        <GridItem xs={12} sm={12} md={8}>
          <Card style={{ backgroundColor: "#ffffff", }}>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Edit your profile</p>
            </CardHeader>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : null}

            <CardBody >
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="firstname"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={(e) => {
                      setState({ ...state, firstname: e.target.value })
                    }}
                    value={state.firstname}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="last name"
                    onChange={(e) => {
                      setState({ ...state, lastname: e.target.value })
                    }}
                    value={state.lastname}
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
                    value={state.email}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,

                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="id number"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={state.idNumber}
                    inputProps={{
                      disabled: true,

                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="phone number"
                    value={state.phone}
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,

                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="city"
                    id="email-address"

                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={state.city}
                    onChange={(e) => {
                      setState({ ...state, city: e.target.value })
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="sex"
                    id="email-address"
                    value={state.sex}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,

                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="password"
                    id="first-name"
                    value={state.password}
                    onChange={(e) => {
                      setState({ ...state, password: e.target.value })
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="confirm password"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={state.conpassword}
                    onChange={(e) => {
                      setState({ ...state, conpassword: e.target.value })
                    }}
                  />

                </GridItem>
              </GridContainer>
              <GridContainer>

                <GridItem xs={12} sm={12} md={4}>
                  <Button1
                    onClick={() => {
                      setOpen(true);
                    }}
                    variant="outlined"
                  >Change Location</Button1>
                  <p>lat : {state.latitute}</p>
                  <p>lng : {state.longitute}</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div >
                    <p>Profile Pic</p>
                    <FileUploader
                      maxSize={50}
                      handleChange={(e) => {
                        setState({ ...state, profileImage: e });
                      }}
                      name="file" types={fileTypes} />
                    <p>{state.profileImage ? `File name: ${state.profileImage}` : "no files uploaded yet"}</p>
                    <p>
                      {/* {ProfilePicMessage.haveError
                        ? <span style={{ color: "red" }}>
                          {ProfilePicMessage.message}
                        </span>
                        : ""} */}
                    </p>
                  </div>
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
              <Button
                onClick={async () => {
                  setProgress(true);
                  const formData = new FormData();
                  formData.append("firstName", state.firstname);
                  formData.append("lastName", state.lastname);
                  formData.append("sex", state.sex);
                  formData.append("profileImage", state.profileImage);
                  formData.append("latitude", state.latitute);
                  formData.append("longtude", state.longitute);
                  formData.append("userType", state.usertype);
                  formData.append("phone", state.phone);
                  formData.append("email", state.email);
                  formData.append("password", state.password);
                  formData.append("city", state.city);
                  formData.append("idPhoto", state.idPhoto);
                  formData.append("idNo", state.idNumber);
                  await dispatch(UpdateCustomerAction(formData, token));
                  // setState(initialState);
                  setTimeout(function () {
                    dispatch(AccountCheckoutAction());
                  }, 10000);
                }}
                color="info">Update Profile</Button>
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

      <Dialog open={open}>
        <Button1 onClick={() => setOpen(false)} variant="contained" color="primary">Select</Button1>
        <div style={{ width: "80vh", height: "70vh" }}>
          <MapPicker
            defaultLocation={{ lat: state.latitute, lng: state.longitute }}
            zoom={zoom}
            style={{ width: "100%", height: "100%" }}
            onChangeLocation={(lat, lng) => {
              setState({ ...state, latitute: lat, longitute: lng })
            }}
            onChangeZoom={handleChangeZoom}
            apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
          />
        </div>
      </Dialog>
    </div>
  );
}

