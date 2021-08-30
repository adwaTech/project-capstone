import React from 'react';
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
  Grid,
  withStyles,
  FormHelperText
} from '@material-ui/core'
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from 'react-redux';
import { PostAuctionAction,
          PostCleanUpAction,
          GetAuctionAuctionAction,
          AuctionerAuctionAction,
} from '../../redux-state-managment/Actions'
import { Alert } from '@material-ui/lab'
import InputBase from '@material-ui/core/InputBase';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { strings } from "../../language/language";
import MapPicker from 'react-google-map-picker';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';


import "react-datepicker/dist/react-datepicker.css";

const fileTypes = ["jpg", "png", "gif", 'jpeg', 'svg', 'pdf'];

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(100),
    position: "relative",
    top: "150px",
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

const steps = ['UserInfo', 'payment info', 'data'];
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

    fontSize: 16,
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
    },
  },
}))(InputBase);

const defaultLocation = { lat: 8.9806, lng: 38.7578 };
const DefaultZoom = 13;



export default function Register({ match, history }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
    setState({ ...state, latitute: lat, longitute: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
    setState({ ...state, zoom: newZoom });
  }


  const [zoom, setZoom] = React.useState(DefaultZoom);
  const [location, setLocation] = React.useState(defaultLocation);

  // global states
  const error = useSelector((state) => state.PostAuctionReducer.error);
  const status = useSelector((state) => state.PostAuctionReducer.status);

  const token = useSelector((state) => state.AccountReducer.token);
  const user = useSelector((state) => state.AccountReducer.user);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 0) {
      validation1();
      if (state.auctionName && state.briefDescription && state.minCPO && state.bidFee && state.minAmount) {
        setActiveStep(activeStep + 1);
      }
    }
    if (activeStep === 1) {
      validation2();
      if (state.images) {
        setActiveStep(activeStep + 1);
      }
    }



  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const initialState = {
    auctionName: '',
    briefDescription: '',
    allPay: "false",
    bidFee: '',
    minAmount: '',
    minCPO: '',
    owner: '',
    auctionType: 'live',
    auctionCategory: 'land',
    images: '',
    condition: 'new',
    extendedDescription: null,
    deadline: new Date(),
    startDate: new Date(),
    latitute: location.lat,
    longitute: location.lng,
  }
  const [auctionName, setAuctionName] = React.useState({ message: '', haveError: '' })
  const [briefDescription, setbriefDescription] = React.useState({ message: '', haveError: '' })
  const [bidFee, setbidFee] = React.useState({ message: '', haveError: '' });
  const [minAmount, setminAmount] = React.useState({ message: '', haveError: '' })
  const [minCPO, setminCPO] = React.useState({ message: '', haveError: '' })
  const [images, setimages] = React.useState({ message: '', haveError: '' })

  function validation1() {
    if (state.auctionName === '') {
      setAuctionName({ message: "this field is required", haveError: true });
    }
    if (state.auctionName) {
      setAuctionName({ message: "", haveError: false });
    }
    if (state.briefDescription === '') {
      setbriefDescription({ message: "this field is required", haveError: true });
    }
    if (state.briefDescription) {
      setbriefDescription({ message: "", haveError: false });
    }
    if (state.bidFee === '') {
      setbidFee({ message: "this field is required", haveError: true });
    }
    if (state.bidFee) {
      setbidFee({ message: "", haveError: false });
    }
    if (state.minCPO === '') {
      setminCPO({ message: "this field is required", haveError: true });
    }
    if (state.minCPO) {
      setminCPO({ message: "", haveError: false });
    }
    if (state.minAmount === '') {
      setminAmount({ message: "this field is required", haveError: true });
    }
    if (state.minAmount) {
      setminAmount({ message: "", haveError: false });
    }
  }
  function validation2() {
    if (state.images === '') {
      setimages({ message: "this field is required", haveError: true });
    }
    if (state.images) {
      setimages({ message: "", haveError: false });
    }

  }

  const [state, setState] = React.useState(initialState);

  const handleDateChange = (date) => {
    setState({ ...state, startDate: date });
  };




  const auctionCategory = ['land', 'house', 'vehicle', 'electronics', 'service', 'rare', 'oldies'];
  function getStepContent(step) {

    switch (step) {
      case 0:
        return <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                error={auctionName.haveError}
                helperText={auctionName.message}
                id="auction name"
                name="auction name"
                label="auction name"
                value={state.auctionName}
                fullWidth
                autoComplete="auction name"
                onChange={(e) => {
                  setState({ ...state, auctionName: e.target.value })
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                error={briefDescription.haveError}
                helperText={briefDescription.message}
                id="brief discription"
                name="brief discription"
                label="brief discription"
                multiline
                fullWidth
                autoComplete="brief discription"
                value={state.briefDescription}
                onChange={(e) => {
                  setState({ ...state, briefDescription: e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <p>condition</p>
              <FormControl fullWidth >
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  label="condition"
                  value={state.condition}
                  color="primary"
                  onChange={(e) => {
                    setState({ ...state, condition: e.target.value })
                  }}
                  input={<BootstrapInput />}
                >
                  <MenuItem value="new" >new</MenuItem>
                  <MenuItem value="used" >used/second hand</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} >
              <label>Auction Catagory</label>
              <FormControl fullWidth >
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={state.auctionCategory}
                  color="primary"
                  onChange={(e) => {
                    setState({ ...state, auctionCategory: e.target.value })
                  }}
                  input={<BootstrapInput />}
                >
                  {
                    auctionCategory.map((auction, index) => (
                      <MenuItem value={auction} key={index}>{auction}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} >
              <TextField
                id="exptended description"
                name="exptended description"
                label="exptended description"
                multiline
                fullWidth
                autoComplete="exptended description"
                value={state.extendedDescription}
                onChange={(e) => {
                  setState({ ...state, extendedDescription: e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <FormControl className={classes.margin} error={minAmount.haveError}>
                <InputLabel htmlFor="input-with-icon-adornment">Min Amount</InputLabel>
                <Input
                  type="number"
                  id="input-with-icon-adornment"
                  required
                  value={state.minAmount}
                  onChange={(e) => setState({ ...state, minAmount: e.target.value })}
                />
                <FormHelperText>{minAmount.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} >
              <FormControl className={classes.margin} error={minCPO.haveError}>
                <InputLabel htmlFor="input-with-icon-adornment">CPO</InputLabel>
                <Input
                  type="number"
                  id="input-with-icon-adornment"
                  value={state.minCPO}
                  onChange={(e) => setState({ ...state, minCPO: e.target.value })}
                />
                <FormHelperText>{minCPO.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.margin} error={bidFee.haveError} >
                <InputLabel htmlFor="input-with-icon-adornment">Bid Fee</InputLabel>
                <Input
                  type="number"

                  id="input-with-icon-adornment"
                  required
                  value={state.bidFee}
                  onChange={(e) => setState({ ...state, bidFee: e.target.value })}
                />
                <FormHelperText>{bidFee.message}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

        </React.Fragment>;
      case 1:
        return <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} >
              {/* <div >
                <p>upload image of item</p>
                <FileUploader
                  maxSize={100}
                  multiline
                  handleChange={(e) => {
                    setState({ ...state, images: state.images});
                  }}
                  name="file" types={fileTypes} />
                <div>{state.images.length > 0 ? <div>
                  {state.images.name}
                </div> : "no files uploaded yet"}</div>
                <p style={{ color: "red" }}>
                  {images.haveError ? images.message : null}
                </p>
              </div> */}
              <div >
                <p>upload image of item</p>
                <FileUploader
                  maxSize={50}
                  handleChange={(e) => {
                    setState({ ...state, images: e });
                  }}
                  name="file" types={fileTypes} />
                <p>{state.images ? `File name: ${state.images.name}` : "no files uploaded yet"}</p>
                <p>
                  <p style={{ color: "red" }}>
                    {images.haveError ? images.message : null}
                  </p>
                </p>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset" fullWidth >
                <FormLabel component="legend">Auction Type</FormLabel>
                <RadioGroup aria-label="auctionType" name="auctionType" value={state.auctionType} onChange={
                  (e) => {
                    setState({ ...state, auctionType: e.target.value })
                  }
                }>
                  <FormControlLabel value="live" control={<Radio />} label="live" />
                  <FormControlLabel value="sealed" control={<Radio />} label="sealed" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {state.auctionType === "live" ? <Grid item xs={6} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Start Date"
                  format="MM/dd/yyyy"
                  value={state.startDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="pick start time"
                  value={state.startDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid> : null}

            <Grid item xs={12} sm={6} >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Deadline Date"
                  format="MM/dd/yyyy"
                  value={state.deadline}
                  onChange={(date) => setState({ ...state, deadline: date })}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={state.deadline}
                  onChange={(date) => setState({ ...state, deadline: date })}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

          </Grid>
        </React.Fragment>;

      case 2:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              {strings.location}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <div style={{ width: "450px", height: "250px" }}>
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
        throw new Error('Unknown step');
    }
  }
  const [progress, setProgress] = React.useState(false);
  React.useEffect(() => {
    if (error) {
      setProgress(false);
    }
    if (token) {
      setProgress(false);
    }
  }, [error, token, progress])

  return (
    <React.Fragment >
      <CssBaseline />

      <main style={{ marginLeft: "40px", marginRight: "40px" }}>

        <Paper>
          <Typography component="h1" variant="h4" align="center">
            Post Auction
          </Typography>
          {
            error
              ? <Alert severity="error">{error}</Alert>
              : null
          }
          {
            status === 200
              ? <Alert severity="success">The auction is successfuly posted</Alert>
              : null
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
                <Typography variant="h5" gutterBottom>
                  Thank you for working with us.
                </Typography>
                <Typography variant="subtitle1">
                  you will notify if some one is participating on your auction so please always check your notification bell
                </Typography>

              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ?
                    <Button
                      variant="contained"
                      color="primary"

                      className={classes.button}
                      onClick={async () => {
                        setProgress(true)
                        const formData = new FormData();
                        formData.append('auctionName', state.auctionName);
                        formData.append('briefDescription', state.briefDescription);
                        formData.append('allPay', state.allPay);
                        formData.append('bidFee', state.bidFee);
                        formData.append('minAmount', state.minAmount);
                        formData.append('minCpo', state.minCPO);
                        formData.append('auctionType', state.auctionType);
                        formData.append('auctionCategory', state.auctionCategory);
                        formData.append('images', state.images);
                        formData.append('extendedDescription', state.extendedDescription);
                        formData.append('deadline', state.deadline);
                        formData.append('condition', state.condition);
                        formData.append('startDate', state.startDate);
                        formData.append("latitude", state.latitute);
                        formData.append("longtude", state.longitute);
                        dispatch(PostAuctionAction(formData, token));
                        setState(initialState);
                        setTimeout(function () {
                          dispatch(PostCleanUpAction());
                        }, 5000);
                        dispatch(GetAuctionAuctionAction(token));
                        dispatch(AuctionerAuctionAction(user._id));   
                      }

                      }
                    >
                      Post
                    </Button> :
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