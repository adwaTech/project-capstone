import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, CircularProgress, Dialog } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { LoginAction,AccountCheckoutAction } from '../../redux-state-managment/Actions';
import { Alert } from '@material-ui/lab';
import './login.css';
import { strings } from '../../language/language';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
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
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: '25px',
    marginBottom: 250,
    top: 200,
    position: "relative",
    boxShadow: "0px 0px 1px rgba(0,0,0.035)",

  },
  donthaveaccounte: {
    cursor: "pointer",
    textDecoration: "none",

  }
}));

export default function SignIn() {
  const lang = useSelector((state) => state.LanguageReducer.language)
  React.useEffect(() => {

  }, [lang]);
  const classes = useStyles();

  return (
    <div className="main-login-page">
      <Header />
      <Route path="/" component={Login} />
      <Footer />
    </div>
  );
}
function Login({ match, history }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const initialState = {
    email: '',
    password: '',
  };
  const [progress, setProgress] = React.useState(false);
  const bool = false;
  const [state, setState] = React.useState(initialState)
  // global states
  const error = useSelector((state) => state.AccountReducer.error);
  const status = useSelector((state) => state.AccountReducer.status);
  const statusText = useSelector((state) => state.AccountReducer.statusText);
  const token = useSelector((state) => state.AccountReducer.token);
  const user = useSelector((state) => state.AccountReducer.user);
  const [errorMessageemail, setErrorMessageemail] = React.useState({
    email: '',
    emaile: false,
  });
  const [errorMessagepass, setErrorMessagepass] = React.useState({

    password: '',
    passe: false,
  });
  const onClickHandler = async () => {
    if (state.email === '') {
      setErrorMessageemail({ ...errorMessageemail, email: "email can not be empty", emaile: true })
    }
    if(state.email) {
      setErrorMessageemail({ ...errorMessageemail, email: "", emaile: false })
    }
    if (state.password === '') {
      setErrorMessagepass({ ...errorMessagepass, password: "password can not be empty", passe: true })
    }
    if(state.password) {
      setErrorMessagepass({ ...errorMessagepass, password: "", passe: false })
    }
    if(state.password && state.email){
      setProgress(true);
      await dispatch(LoginAction(state));
      setState(initialState);
      setTimeout(function(){
        dispatch(AccountCheckoutAction());
      }, 3000);
    }
  }
  React.useEffect(()=>{
    if(error){
      setProgress(false);
    }
    if(token){
      setProgress(false);
    }
  },[error])
  return (
    <Container maxWidth="xs" className={classes.container} >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {strings.singin}
        </Typography>
        {
          error
            ? <div>
              {statusText==="Network Error"
              ?<div>
                <Alert severity="error">{error}</Alert>
              </div>
              :<div>
                <Alert severity="error">Incorrect email or password</Alert>
              </div>
              }
            </div>
            : null
        }
        {
          token
            ? (user.userType == "customer"
              ? <Redirect to='/profile' />
              : user.userType == "admin"
                ? <Redirect to="/admin" />
                : null)
            : null
        }
        <div className={classes.form} noValidate>
          <TextField
            error={errorMessageemail.emaile}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={state.email}
            helperText={errorMessageemail.email}
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
          />
          <TextField
            error={errorMessagepass.passe}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errorMessagepass.password}
            value={state.password}
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            disabled={progress}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onClickHandler}
          >
            {progress?<div><CircularProgress/>Loading</div>:strings.singin}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgetpassword" className={classes.donthaveaccount} variant="body2">
                {strings.fortgotpassword}
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" className={classes.donthaveaccount} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* <Progress open={progress} setOpen={setProgress} /> */}
    </Container>
  )
}

function Progress(props) {
  const error = useSelector((state) => state.AccountReducer.error);
  const token = useSelector((state) => state.AccountReducer.token);
  function progresscheck() {
    if (error.length > 0) {
      props.setOpen(false);
    }
    if (token) {
      props.setOpen(false);
    }
  }
  return (
    <Dialog open={props.open} >
      {progresscheck()}
      <div style={{ width: "100px", height: "100px", display: "flex", background: "black", opacity: 0.5, border: "none", boxShadow: 'none' }}>
        <CircularProgress style={{ margin: "30px" }} />
      </div>
    </Dialog>
  )
}