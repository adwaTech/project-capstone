import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Facebook from '@material-ui/icons/Facebook';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Google from '../../assets/images/google.svg'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function AddressForm() {
  function handleOnChange(value) {
    this.setState({
       phone: value
    });
  }
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [state,setState]=React.useState({
    username:'',
    usertype:'customer',
    password:'',
    conpassword:'',
    firstname:'',
    lastname:'',
    idNumber:'',
    sex:'male',
    insurance:false,
    phone:'',
    email:'',
    location:'',
    profileImage:'',
  })
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="user name"
            value={state.username}
            fullWidth
            autoComplete="given-name"
            onChange={(e)=>{
              setState({...state,username:e.target.value})
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="first name"
            name="first name"
            label="first name"
            value={state.lastname}
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
            className={classes.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="raised" component="span" className={classes.button}>
              Upload Profile Image
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
          <TextField
            required
            id="idNumber"
            name="idNumber"
            label="idNumber"
            type="number"
            fullWidth
            autoComplete="id number"
            onChange={(e)=>{
              setState({...state,idNumber:e.target.value})
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
            <Input
              type="number"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Typography>+251</Typography>
                </InputAdornment>
              }
              onChange={(e)=>setState({...state,phone:`+251${e.target.value}`})}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
              <Typography>Register with </Typography>
              <div>
                <img src={Google} alt="" width="20" height="20"/>
                Google</div>
              <div>
              <Facebook/>FaceBook
                </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
