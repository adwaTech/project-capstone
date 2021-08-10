import React from 'react';
import {makeStyles} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Google from '../../assets/images/google.svg'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Facebook from '@material-ui/icons/Facebook';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LocationPicker from 'react-location-picker';
import MapPicker from 'react-google-map-picker';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {useDispatch,useSelector} from 'react-redux';
import {RegisterAction} from '../../redux-state-managment/Actions'
import {
   OutlinedInput, IconButton
} from '@material-ui/core';


const DefaultLocation = { lat: 8.9806, lng: 38.7578};
const DefaultZoom = 13;


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    marginTop:theme.spacing(0),
    marginBottom:theme.spacing(100),
    position:"relative",
    top:"150px",
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
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
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Personal information', 'detail', 'Location'];



export default function Checkout() {
  const dispatch=useDispatch();
  const classes = useStyles();
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
  const [state,setState]=React.useState({
    usertype:'customer',
    password:'',
    conpassword:'',
    firstname:'',
    lastname:'',
    idNumber:'',
    idImage:'',
    sex:'male',
    phone:'',
    email:'',
    profileImage:'',
    city: "",
    latitute:location.lat,
    longitute:location.lng,
  })
  function handleChangeLocation (lat, lng){
      setLocation({lat:lat, lng:lng});
      setState({...state,latitute:lat,longitute:lng});
  }

  function handleChangeZoom (newZoom){
      setZoom(newZoom);
      setState({...state,zoom:newZoom});
  }

  function handleResetLocation(){
      setDefaultLocation({ ... DefaultLocation});
      setZoom(DefaultZoom);
  }
  const [values, setValues] = React.useState({
    
    showPassword: false,
  });
  function getStepContent(step) {
  
    switch (step) {
      case 0:
        return <React.Fragment>
                  <Typography variant="h6" gutterBottom>
                    Personal Information
                  </Typography>

                  <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="first name"
                        name="first name"
                        label="first name"
                        value={state.firstname}
                        fullWidth
                        autoComplete="first name"
                        onChange={(e)=>{
                          setState({...state,firstname:e.target.value})
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastname"
                        name="last name"
                        label="last name"
                        fullWidth
                        autoComplete="last name"
                        value={state.lastname}
                        onChange={(e)=>{
                          setState({...state,lastname:e.target.value})
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl} fullWidth>
                          <InputLabel id="user type">User Type</InputLabel>
                          <Select
                            labelId="user type"
                            id="user-type"
                            value={state.usertype}
                            onChange={(e)=>{
                              setState({...state,usertype:e.target.value})
                            }}
                          >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="customer">Customer</MenuItem>
                          </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        onChange={(e)=>{
                          setState({...state,profileImage:e.target.files[0]});
                        }}
                        type="file"
                      />
                      <label htmlFor="raised-button-file">
                        <Button variant="outlined" component="span" className={classes.button}>
                          Upload Profile Image optional
                        </Button>
                      </label> 
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl component="fieldset" fullWidth>
                          <FormLabel component="legend">Gender</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" value={state.sex} onChange={
                            (e)=>{
                              setState({...state,sex:e.target.value})
                            }
                          }>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">phone number</InputLabel>
                        <Input
                          type="number"
                          id="input-with-icon-adornment"
                          required
                          startAdornment={
                            <InputAdornment position="start">
                              <Typography>+251</Typography>
                            </InputAdornment>
                          }
                          onChange={(e)=>setState({...state,phone:`+251${e.target.value}`})}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                      />
                    </Grid>
                  </Grid>
                </React.Fragment>;
      case 1:
        return <React.Fragment>
        <Typography variant="h6" gutterBottom>
          user Detail Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField 
            required id="email"
            label="email" 
            fullWidth 
            autoComplete="email" 
            value={state.email}
            onChange={(e)=>{
              setState({
                ...state,email:e.target.value
              })
            }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="idNumber"
              name="idNumber"
              label="idNumber"
              type="number"
              value={state.idNumber}
              fullWidth
              autoComplete="id number"
              onChange={(e)=>{
                setState({...state,idNumber:e.target.value})
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
          <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        required
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={state.password}
                        className={classes.textfield}
                        onChange={(e) => { setState({...state,password:e.target.value}) }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
          <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">retype your password</InputLabel>
                    <OutlinedInput
                        required
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={state.conpassword}
                        className={classes.textfield}
                        onChange={(e) => { setState({...state,conpassword:e.target.value}) }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
            style={{ display: 'none' }}
            id="raised-button-file"
              onChange={(e)=>{
                  console.log(e.target.files[0])
                  setState({...state,Image:e.target.files[0]});
              }} 
              type="file"  name="image" placeholder="image" required="required"/>
            {/* <input
              accept="image/*"
              className={classes.input}
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
              onChange={(e)=>{
                setState({...state,idImage:e.target.files[0]});
                console.log(e.targe.files[0]);
              }}
            /> */}
            <label htmlFor="raised-button-file">
              <Button variant="outlined" component="span" className={classes.button}>
                Upload your id card
              </Button>
            </label> 
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="city"
              label="city"
              value={state.city}
              onChange={(e)=>{
                setState({...state,city:e.target.value})
              }}
              helperText="please white your city"
              fullWidth
              autoComplete="adiss abeba"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="varify your email"
            />
          </Grid>
        </Grid>
      </React.Fragment>;
      case 2:
        return <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Location
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
              <div style={{width:"90vh",height:"70vh"}}>
              <MapPicker defaultLocation={defaultLocation}
                    zoom={zoom}
                    style={{width:"100%",height:"100%"}}
                    onChangeLocation={handleChangeLocation} 
                    onChangeZoom={handleChangeZoom}
                    apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
              </div>
          </Grid>
          <Grid>
            lat:{state.latitute}
            Log:{state.longitute}
          </Grid>
        </Grid>
      </React.Fragment>;
      default:
        throw new Error('Unknown step');
    }
  }
  
  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            SignUp
          </Typography>
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
                  Thank you for being part of us.
                </Typography>
                <Typography variant="subtitle1">
                  please varify your accont by checking your email .we have send you an email.
                </Typography>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} variant="outlined" className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? 
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    onClick={()=>{
                      const formData=new FormData();
                      formData.append('firstname',state.firstname);
                      formData.append('lastname',state.lastname);
                      formData.append('sex',state.sex);
                      formData.append('profileImage',state.profileImage);
                      formData.append('latitute',state.latitute);
                      formData.append('longitute',state.longitute);
                      formData.append('userType',state.usertype);
                      formData.append('phone',state.phone);
                      formData.append('email',state.email);
                      formData.append('password',state.password);
                      formData.append('city',state.city);
                      formData.append('idImage',state.idImage);
                      formData.append('idNumber',state.idNumber);
                      console.log(formData);
                      console.log(state);
                      // dispatch(RegisterAction(formData));
                      setState({
                          title:'',
                          description:'',
                      })
                  }}
                  >
                    Register
                  </Button>:
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}