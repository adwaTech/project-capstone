import React from "react";
import { strings } from "../../language/language";
import { FileUploader } from "react-drag-drop-files";
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
  Input,
  InputAdornment,
  Grid,
  IconButton,
  FormHelperText,
  CircularProgress
} from '@material-ui/core';
import MapPicker from 'react-google-map-picker';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAction, AccountCheckoutAction } from '../../redux-state-managment/Actions'
import { Alert } from '@material-ui/lab'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ScrollToTop from '../../scrollTop/ScrollToTop';
import {Link } from 'react-router-dom';





const DefaultLocation = { lat: 8.9806, lng: 38.7578 };
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

const fileTypes = ["jpg", "png", "gif", 'jpeg'];

const steps = [strings.personalinfo, strings.detail, strings.location];

export default function Register() {
  const lang = useSelector((state) => state.LanguageReducer.language);
  const [progress, setProgress] = React.useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();
  // global states
  const error = useSelector((state) => state.AccountReducer.error);
  // const status = useSelector((state) => state.AccountReducer.status);
  // const statusText = useSelector((state) => state.AccountReducer.statusText);
  const token = useSelector((state) => state.AccountReducer.token);
  const user = useSelector((state) => state.AccountReducer.user);

  const [activeStep, setActiveStep] = React.useState(0);
  const [defaultLocation, setDefaultLocation] = React.useState(DefaultLocation);
  const [zoom, setZoom] = React.useState(DefaultZoom);
  const [location, setLocation] = React.useState(defaultLocation);
  const handleNext = () => {
    if (activeStep === 0) {
      validate1step();
      if (state.firstname && state.lastname && state.profileImage && (state.phone.length === 13 || state.phone.length === 14) && state.usertype && state.sex)
        setActiveStep(activeStep + 1);
    }

    if (activeStep === 1) {
      validate2step();
      if (state.email && state.city && state.conpassword && state.password && state.idNumber && state.idPhoto) {
        if (state.conpassword === state.password) {
          if ((!ConpasswordMessage.haveError)) {
            if (!emailMessage.haveError) {
              setActiveStep(activeStep + 1);
            }
          }
        }
      }
    }
    if (activeStep === 2) {
      validate3step();
      if (state.latitute && state.longitute) {
        setActiveStep(activeStep + 1)
        setDefaultLocation({})
      }
    }


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
    adminToken: ''
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
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [fnameerror, setFnameerror] = React.useState({
    message: '',
    haveError: false
  });
  const [lnameerror, setLnameerror] = React.useState({
    message: '',
    haveError: false
  });
  const [sexMessage, setSexMessage] = React.useState({
    message: '',
    haveError: false
  });
  const [ProfilePicMessage, setProfilePicMessage] = React.useState({
    message: '',
    haveError: false
  });

  const [Usertypemessage, setUsertypemessage] = React.useState({
    message: '',
    haveError: false
  });
  const [PhoneMessage, setPhoneMessage] = React.useState({
    message: '',
    haveError: false
  });
  const [emailMessage, setemailMessage] = React.useState({
    message: '',
    haveError: false
  });
  const [passwordMessage, setpasswordMessage] = React.useState({
    message: '',
    haveError: false
  });
  const [ConpasswordMessage, setConpasswordMessage] = React.useState({
    message: '',
    haveError: false
  });
  const [Citymessage, setCitymessage] = React.useState({
    message: '',
    haveError: false
  });
  const [IdPhotoMessage, setIdPhotoMessage] = React.useState({
    message: '',
    haveError: false
  });
  const [IdNumMessage, setIdNumMessage] = React.useState({
    message: '',
    haveError: false
  });
  const validate1step = () => {
    if (state.firstname === '') {
      setFnameerror({ message: "this field is required", haveError: true })
    }
    if (state.firstname) {
      setFnameerror({ message: "", haveError: false })
    }
    if (state.lastname === '') {
      setLnameerror({ message: "this field is required", haveError: true })
    }
    if (state.lastname) {
      setLnameerror({ message: "", haveError: false })
    }
    if (state.usertype === '') {
      setUsertypemessage({ message: "this field is required", haveError: true })
    }
    if (state.usertype) {
      setUsertypemessage({ message: "", haveError: false })
    }
    if (state.profileImage === '') {
      setProfilePicMessage({ message: "this field is required", haveError: true })
    }
    if (state.profileImage) {
      setProfilePicMessage({ message: "", haveError: false })
    }
    if (state.gender === '') {
      setSexMessage({ message: "this field is required", haveError: true })
    }
    if (state.gender) {
      setSexMessage({ message: "", haveError: false })
    }
    if (state.phone.length < 5) {
      setPhoneMessage({ message: "this field is required", haveError: true })
    }
    if (state.phone.length > 4) {
      if (state.phone.length === 13 || state.phone.length === 14) {
        setPhoneMessage({ message: "", haveError: false })
      }
      else {
        setPhoneMessage({ message: "phone number must have 9 digit write with out (0 and +251) e.g 917897592", haveError: true })
      }
    }
  }
  const validate2step = () => {
    if (state.email === '') {
      setemailMessage({ message: "this field is required", haveError: true })
    }
    if (state.email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // return re.test(String(state.email).toLowerCase());
      if (re.test(state.email.toLowerCase())) {
        setemailMessage({ message: "", haveError: false })
      }
      else {
        setemailMessage({ message: "incorrect email e.g meseretkifle2@gmail.com", haveError: true })
      }

    }
    if (state.city === '') {
      setCitymessage({ message: "this field is required", haveError: true })
    }
    if (state.city) {
      setCitymessage({ message: "", haveError: false })
    }
    if (state.password === '') {
      setpasswordMessage({ message: "this field is required", haveError: true })
    }
    if (state.password) {
      setpasswordMessage({ message: "", haveError: false })
    }
    if (state.conpassword === '') {
      setConpasswordMessage({ message: "this field is required", haveError: true })
    }
    if (state.conpassword) {
      if (state.conpassword !== state.password) {
        setConpasswordMessage({ message: "password and conpassword must be the same", haveError: true })
      }
      if (state.conpassword === state.password) {
        if (state.password.length > 8) {
          var format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
          var bool = format.test(state.password);
          if (bool) {
            if (/\d/.test(state.password)) {
              if (/[A-Z]/.test(state.password)) {
                setConpasswordMessage({ message: "", haveError: false })
              }
              else {
                setConpasswordMessage({ message: "password must contain Captial letter", haveError: true })
              }
            }
            else {
              setConpasswordMessage({ message: "password must contain a number", haveError: true })
            }
          }
          else {
            setConpasswordMessage({ message: "password must contain at least one special character e.g @,&", haveError: true })
          }
        }
        else {
          setConpasswordMessage({ message: "length of the password must be greater than 8", haveError: true })
        }

      }
    }

    if (state.idNumber === '') {
      setIdNumMessage({ message: "this field is required", haveError: true })
    }
    if (state.idNumber) {
      setIdNumMessage({ message: "", haveError: false })
    }
    if (state.idPhoto === '') {
      setIdPhotoMessage({ message: "this field is required", haveError: true })
    }
    if (state.idPhoto) {
      setIdPhotoMessage({ message: "", haveError: false })
    }
  }
  const validate3step = () => {
  }

  const onClickHandler = async () => {
    setProgress(true);
    const formData = new FormData();
    formData.append("firstName", state.firstname);
    formData.append("lastName", state.lastname);
    formData.append("sex", state.sex);
    formData.append("profileImage", state.profileImage);
    formData.append("latitude", state.latitute);
    formData.append("longtude", state.longitute);
    formData.append("userType", state.usertype);
    if (state.adminToken && state.usertype == 'admin') formData.append("adminToken", state.adminToken);
    formData.append("phone", state.phone);
    formData.append("email", state.email);
    formData.append("password", state.password);
    formData.append("city", state.city);
    formData.append("idPhoto", state.idPhoto);
    formData.append("idNo", state.idNumber);
    await dispatch(RegisterAction(formData));
    // setState(initialState);
    setTimeout(function () {
      dispatch(AccountCheckoutAction());
    }, 10000);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <ScrollToTop/>
            <Typography variant="h6" gutterBottom>
              {strings.personalinfo}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={fnameerror.haveError}
                  helperText={fnameerror.message}
                  id="first name"
                  name="first name"
                  label={strings.label1}
                  value={state.firstname}
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
                  error={lnameerror.haveError}
                  helperText={lnameerror.message}
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
                <FormControl className={classes.formControl} fullWidth error={Usertypemessage.haveError}>
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
                  <FormHelperText>{Usertypemessage.message}</FormHelperText>
                </FormControl>
              </Grid>
              {
                state.usertype === "admin" ?
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      // error={fnameerror.haveError}
                      // helperText={fnameerror.message}
                      id="token"
                      name="token"
                      label="admin Token"
                      value={state.adminToken}
                      fullWidth
                      // autoComplete={strings.token}
                      onChange={(e) => {
                        setState({ ...state, adminToken: e.target.value });
                      }}
                    />
                  </Grid>
                  : null
              }
              <Grid item xs={12} sm={6}>
                <div >
                  <p>Profile Image</p>
                  <FileUploader
                    maxSize={50}
                    handleChange={(e) => {
                      setState({ ...state, profileImage: e });
                    }}
                    name="file" types={fileTypes} />
                  <p>{state.profileImage ? `File name: ${state.profileImage.name}` : "no files uploaded yet"}</p>
                  <p>
                    {ProfilePicMessage.haveError
                      ? <span style={{ color: "red" }}>
                        {ProfilePicMessage.message}
                      </span>
                      : ""}
                  </p>
                </div>

              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" fullWidth error={sexMessage.haveError}>
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
                  <FormHelperText>{sexMessage.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.margin} error={PhoneMessage.haveError}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    {strings.phone}
                  </InputLabel>
                  <Input
                    type="number"
                    id="input-with-icon-adornment"
                    required
                    error={PhoneMessage.haveError}
                    helperText
                    startAdornment={
                      <InputAdornment position="start">
                        <Typography>+251</Typography>
                      </InputAdornment>
                    }
                    onChange={(e) =>
                      setState({ ...state, phone: `+251${e.target.value}` })
                    }
                  />
                  <FormHelperText>{PhoneMessage.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Link to="/login" className={classes.donthaveaccount} variant="body2">
                  {"I have an account?"}<Button>login</Button>
                </Link>
                {/* <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label={strings.label5}
                /> */}
              </Grid>
            </Grid>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <ScrollToTop/>
            <Typography variant="h6" gutterBottom>
              {strings.userdetail}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  error={emailMessage.haveError}
                  helperText={emailMessage.message}
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
                  error={IdNumMessage.haveError}
                  helperText={IdNumMessage.message}
                  id="idNumber"
                  name="ID"
                  label={strings.label7}
                  value={state.idNumber}
                  fullWidth
                  autoComplete="ID"
                  onChange={(e) => {
                    setState({ ...state, idNumber: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth error={passwordMessage.haveError}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    {strings.password}
                  </InputLabel>
                  <Input
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
                  <FormHelperText>{passwordMessage.message}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth error={ConpasswordMessage.haveError}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    {strings.retypepassword}
                  </InputLabel>
                  <Input
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
                  <FormHelperText>{ConpasswordMessage.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div >
                  <p>Photo of Id</p>
                  <FileUploader
                    maxSize={30}
                    handleChange={(e) => {
                      setState({ ...state, idPhoto: e });
                    }}
                    name="file" types={fileTypes} />
                  <p>{state.idPhoto ? `File name: ${state.idPhoto.name}` : "no files uploaded yet"}</p>

                  <p>
                    {IdPhotoMessage.haveError
                      ? <span style={{ color: "red" }}>
                        {IdPhotoMessage.message}
                      </span>
                      : ""}</p>
                </div>

              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  error={Citymessage.haveError}
                  helperText={Citymessage.message}
                  id="city"
                  label="city"
                  value={state.city}
                  onChange={(e) => {
                    setState({ ...state, city: e.target.value });
                  }}
                  fullWidth
                  autoComplete="adiss abeba"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={
                    <Checkbox color="secondary" name="saveCard" value="yes" />
                  }
                  label={strings.label8}
                /> */}
              </Grid>
            </Grid>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <ScrollToTop/>
            <Typography variant="h6" gutterBottom>
              {strings.location}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <div style={{ width: "80vh", height: "70vh" }}>
                  {window.navigator.onLine ?
                    <MapPicker
                      defaultLocation={defaultLocation}
                      zoom={zoom}
                      mapTypeId="roadmap"
                      style={{ width: "100%", height: "100%" }}
                      onChangeLocation={handleChangeLocation}
                      onChangeZoom={handleChangeZoom}
                      apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
                    />
                    :
                    <Alert severity="info">please check your connection you are offline </Alert>
                  }
                  {/* <MyGoogleMap/> */}


                </div>
              </Grid>
              <Grid>
                lat:{state.latitute}
                Log:{state.longitute}
              </Grid>
            </Grid>
          </React.Fragment >
        );
      default:
        throw new Error("Unknown step");
    }
  }
  const [connection, setConnection] = React.useState('offline')
  React.useEffect(() => {
    if (error) {
      setProgress(false);
    }
    if (token) {
      setProgress(false);
    }
    window.addEventListener("offline", (event) => {
      // const statusDisplay = document.getElementById("status");
      // statusDisplay.textContent = "OFFline";
      setConnection("offline")
    });

    window.addEventListener("online", (event) => {
      // const statusDisplay = document.getElementById("status");
      // statusDisplay.textContent = "Online";
      setConnection('online')
      console.log("no")
    });
    // console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line');
    // document.getElementById('statusCheck').addEventListener('click', () => console.log('window.navigator.onLine is ' + window.navigator.onLine));

  }, [lang, error, token]);



  window.addEventListener('online', () => console.log('Became online'));
  window.addEventListener('offline', () => console.log('Became offline'));


  return (
    <React.Fragment>
      <ScrollToTop />
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {strings.signup}
          </Typography>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : null}
          {
            token
              ?
              user ? user.userType === "customer"
                ? <Redirect to='/profile' /> : null
                : null : null
          }
          {
            token ? user ? user.userType === "admin"
              ? <Redirect to="/admin" /> : null : null : null
          }

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
                {/* <Typography variant="h5" gutterBottom>
                  {strings.tanks}
                </Typography>
                <Typography variant="subtitle1">
                  {strings.pleaseverify}
                </Typography> */}
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
                      // onClick={handleNext}
                      className={classes.button}
                      onClick={onClickHandler}
                    >
                      {progress ? <div><CircularProgress color="#ffffff" />Loading</div> : strings.register}
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
