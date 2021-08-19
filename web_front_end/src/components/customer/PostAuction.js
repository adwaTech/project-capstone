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
  withStyles
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { PostAuctionAction } from '../../redux-state-managment/Actions'
import { Alert } from '@material-ui/lab'
import InputBase from '@material-ui/core/InputBase';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

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


export default function Register({ match, history }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  // global states
  const error = useSelector((state) => state.PostAuctionReducer.error);
  const status = useSelector((state) => state.PostAuctionReducer.status);
  const statusText = useSelector((state) => state.PostAuctionReducer.statusText);
  const token = useSelector((state) => state.AccountReducer.token);
  const postedauction = useSelector((state) => state.PostAuctionReducer.postedauction);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
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
    images: [],
    condition: 'new',
    extendedDescription: '',
    // status: '',
    approval: '',
    postedOn: '',
    deadline: new Date(),
  }

  const [state, setState] = React.useState(initialState);


  const auctionCategory = ['land', 'house', 'vehicle', 'electronics', 'service', 'rare', 'oldies'];
  function getStepContent(step) {

    switch (step) {
      case 0:
        return <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required

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
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset" fullWidth >
                <FormLabel component="legend">all pay</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={state.allPay} onChange={
                  (e) => {
                    setState({ ...state, allPay: e.target.value })
                  }
                }>
                  <FormControlLabel value="true" control={<Radio />} label="yes" />
                  <FormControlLabel value="false" control={<Radio />} label="no" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField
                required
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


          </Grid>

        </React.Fragment>;
      case 1:
        return <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} >
              <input
                accept="image/*"
                style={{ display: 'none' }}
                multiple
                id="raised-button-file"
                onChange={(e) => {
                  setState({ ...state, images: e.target.files[0] });
                }}
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="outlined" component="span" className={classes.button}>
                  Upload image
                </Button>
              </label>
              <label>{state.images.name}</label>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.margin} >
                <InputLabel htmlFor="input-with-icon-adornment">Bid Fee</InputLabel>
                <Input
                  type="number"

                  id="input-with-icon-adornment"
                  required
                  value={state.bidFee}
                  onChange={(e) => setState({ ...state, bidFee: e.target.value })}
                />
              </FormControl>
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
            <Grid item xs={12} sm={6} >
              <label>condition</label>
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

          </Grid>
        </React.Fragment>;
      case 2:
        return <React.Fragment>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} >
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Min Amount</InputLabel>
                <Input
                  type="number"
                  id="input-with-icon-adornment"
                  required
                  value={state.minAmount}
                  onChange={(e) => setState({ ...state, minAmount: e.target.value })}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} >
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">CPO</InputLabel>
                <Input
                  type="number"
                  id="input-with-icon-adornment"
                  value={state.minCPO}
                  onChange={(e) => setState({ ...state, minCPO: e.target.value })}
                />
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
              <label>deadline</label>
              <DatePicker selected={state.deadline} onChange={(date) => setState({ ...state, deadline: date })} />
            </Grid>
          </Grid>
        </React.Fragment>;

      default:
        throw new Error('Unknown step');
    }
  }

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
              ? <Alert severity="error">status :{status} <br />statusText:{statusText} <br /> error:{error}</Alert>
              : null
          }
          {
            status === 200
              ? <Alert severity="success">status :{status} : The auction is successfuly posted</Alert>
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
                      onClick={handleNext}
                      className={classes.button}
                      onClick={async () => {
                        const formData = new FormData();
                        formData.append('auctionName', state.auctionName);
                        formData.append('briefDescription', state.briefDescription);
                        formData.append('allPay', state.allPay);
                        formData.append('bidFee', state.bidFee);
                        formData.append('minAmount', state.minAmount);
                        formData.append('minCPO', state.minCPO);
                        formData.append('owner', state.owner);
                        formData.append('auctionType', state.auctionType);
                        formData.append('auctionCategory', state.auctionCategory);
                        formData.append('images', state.images);
                        formData.append('extendedDescription', state.extendedDescription);
                        formData.append('deadline', state.deadline);
                        formData.append('condition', state.condition);
                        dispatch(PostAuctionAction(formData, token));
                        // setState(initialState)
                      }}
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