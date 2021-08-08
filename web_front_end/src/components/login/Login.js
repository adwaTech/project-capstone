import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Google from '../../assets/assets/google.svg';
import Facebook from '../../assets/assets/facebook.svg';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../redux-state-managment/Actions';
import {Route} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container:{
    padding:10,
    backgroundColor:"white",
    borderRadius:'25px',
    paddingTop:170,
    marginBottom:100
  },
  donthaveaccounte:{
    cursor:"pointer",
    textDecoration:"none",

  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div>
    <Header/>
      <Route path="/" component={Login}/> 
    <Footer/>
    </div>
  );
}
function Login({ match, history }){
  const dispatch=useDispatch();
  const classes = useStyles();
  const [state,setState]=React.useState({
    username:'',
    password:'',
  })
  return(
    <Container component="main" maxWidth="xs" className={classes.container} >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in     
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.username}
            onChange={(e)=>{
              setState({...state,username:e.target.value});
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={(e)=>{
              setState({...state,password:e.target.value});
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <label>sign in with 
            <img src={Facebook} alt="Facebook" style={{cursor:"pointer"}} width="50" height="40"/>
            <img src={Google} alt="Google" style={{cursor:"pointer",}} width="30" height="20"/>
          </label>
          <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={
                async () => {
                    await dispatch(LoginAction(state));
                    await history.push(`/admin`);
                    // await dispatch(getProfile(userInfo.userName,userInfo.type));
                }
              }
            >
              Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgetpassword" className={classes.donthaveaccount}  variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register"  className={classes.donthaveaccount} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
}
