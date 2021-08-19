import React from "react";
import { strings } from "../../language/language";
import {
  makeStyles,
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Radio,
  RadioGroup,
  FormLabel,
  TextField,
  FormControlLabel,
  Checkbox,
  Input,
  InputAdornment,
  Grid,
  OutlinedInput,
  IconButton,
} from '@material-ui/core';
import MapPicker from 'react-google-map-picker';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {useDispatch,useSelector} from 'react-redux';
import {RegisterAction} from '../../redux-state-managment/Actions'
import {Alert} from '@material-ui/lab'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ScrollToTop from '../../scrollTop/ScrollToTop';

const DefaultLocation = { lat: 8.9806, lng: 38.7578};
const DefaultZoom = 13;

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(100),
    position: "relative",
    top: "150px",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(20),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [strings.personalinfo, strings.detail, strings.location];

export default function Register({ match, history }) {
  const lang = useSelector((state) => state.LanguageReducer.language);
  React.useEffect(() => {}, [lang]);
  const dispatch = useDispatch();
  const classes = useStyles();
  // global states
  const error = useSelector((state) => state.AccountReducer.error);
  const status = useSelector((state) => state.AccountReducer.status);
  const statusText = useSelector((state) => state.AccountReducer.statusText);
  const token = useSelector((state) => state.AccountReducer.token);
  const user = useSelector((state) => state.AccountReducer.user);

  const [activeStep, setActiveStep] = React.useState(0);
  const [defaultLocation, setDefaultLocation] = React.useState(DefaultLocation);
  const [zoom, setZoom] = React.useState(DefaultZoom);
  const [location, setLocation] = React.useState(defaultLocation);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialState = {
    usertype: "customer",
    password: "",
    conpassword: "",
    firstname: "",
    lastname: "",
    idNumber: "",
    idPhoto: "",
    sex: "male",
    phone: "",
    email: "",
    profileImage: "",
    city: "",
    latitute: location.lat,
    longitute: location.lng,
  };

  const [state, setState] = React.useState(initialState);
  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
    setState({ ...state, latitute: lat, longitute: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
    setState({ ...state, zoom: newZoom });
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              {strings.personalinfo}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="first name"
                  name="first name"
                  label={strings.label1}
                  value={state.name}
                  fullWidth
                  autoComplete={strings.fname}
                  onChange={(e) => {
                    setState({ ...state, firstname: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastname"
                  name="last name"
                  label={strings.label2}
                  fullWidth
                  autoComplete="last name"
                  value={state.lastname}
                  onChange={(e) => {
                    setState({ ...state, lastname: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel id="user type">{strings.usertype}</InputLabel>
                  <Select
                    labelId="user type"
                    id="user-type"
                    value={state.usertype}
                    onChange={(e) => {
                      setState({ ...state, usertype: e.target.value });
                    }}
                  >
                    <MenuItem value="admin">{strings.admin}</MenuItem>
                    <MenuItem value="customer">{strings.customer}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  onChange={(e) => {
                    setState({ ...state, profileImage: e.target.files[0] });
                  }}
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.button}
                  >
                    {strings.uploadprofile}
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">{strings.gender}</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={state.sex}
                    onChange={(e) => {
                      setState({ ...state, sex: e.target.value });
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label={strings.label3}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label={strings.label4}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    {strings.phone}
                  </InputLabel>
                  <Input
                    type="number"
                    id="input-with-icon-adornment"
                    required
                    startAdornment={
                      <InputAdornment position="start">
                        <Typography>+251</Typography>
                      </InputAdornment>
                    }
                    onChange={(e) =>
                      setState({ ...state, phone: `+251${e.target.value}` })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label={strings.label5}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              {strings.userdetail}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="email"
                  label={strings.label6}
                  fullWidth
                  autoComplete="email"
                  value={state.email}
                  onChange={(e) => {
                    setState({
                      ...state,
                      email: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="idNumber"
                  name="idNumber"
                  label={strings.label7}
                  type="number"
                  value="idNumber"
                  fullWidth
                  autoComplete="id number"
                  onChange={(e) => {
                    setState({ ...state, idNumber: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    {strings.password}
                  </InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={state.password}
                    className={classes.textfield}
                    onChange={(e) => {
                      setState({ ...state, password: e.target.value });
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    {strings.retypepassword}
                  </InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={state.conpassword}
                    className={classes.textfield}
                    onChange={(e) => {
                      setState({ ...state, conpassword: e.target.value });
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  className={classes.input}
                  style={{ display: "none" }}
                  id="raised-button-file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setState({ ...state, idPhoto: e.target.files[0] });
                  }}
                  type="file"
                  name="image"
                  placeholder="image"
                  required="required"
                />

                <label htmlFor="raised-button-file">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.button}
                  >
                    {strings.uploadid}
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="city"
                  label="city"
                  value={state.city}
                  onChange={(e) => {
                    setState({ ...state, city: e.target.value });
                  }}
                  helperText="please white your city"
                  fullWidth
                  autoComplete="adiss abeba"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" name="saveCard" value="yes" />
                  }
                  label={strings.label8}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              {strings.location}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <div style={{ width: "90vh", height: "70vh" }}>
                  <MapPicker
                    defaultLocation={defaultLocation}
                    zoom={zoom}
                    style={{ width: "100%", height: "100%" }}
                    onChangeLocation={handleChangeLocation}
                    onChangeZoom={handleChangeZoom}
                    apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
                  />
                </div>
              </Grid>
              <Grid>
                lat:{state.latitute}
                Log:{state.longitute}
              </Grid>
            </Grid>
          </React.Fragment>
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <React.Fragment>
      <ScrollToTop/>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {strings.signup}
          </Typography>
          {error ? (
            <Alert severity="error">
              status :{status} <br />
              statusText:{statusText} <br /> error:{error}
            </Alert>
          ) : null}
          {token ? (
            user.userType == "customer" ? (
              <Redirect to="/profile" />
            ) : user.userType == "admin" ? (
              <Redirect to="/admin" />
            ) : null
          ) : null}

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  {strings.tanks}
                </Typography>
                <Typography variant="subtitle1">
                  {strings.pleaseverify}
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      variant="outlined"
                      className={classes.button}
                    >
                      {strings.back}
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      onClick={async () => {
                        const formData = new FormData();
                        formData.append("firstName", state.firstname);
                        formData.append("lastName", state.lastname);
                        formData.append("sex", state.sex);
                        formData.append("profileImage", state.profileImage);
                        formData.append("latitute", state.latitute);
                        formData.append("longitute", state.longitute);
                        formData.append("userType", state.usertype);
                        formData.append("phone", state.phone);
                        formData.append("email", state.email);
                        formData.append("password", state.password);
                        formData.append("city", state.city);
                        formData.append("idPhoto", state.idPhoto);
                        formData.append("idNo", state.idNumber);
                        dispatch(RegisterAction(formData));
                        setState(initialState);
                      }}
                    >
                      {strings.register}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {strings.next}
                    </Button>
                  )}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
