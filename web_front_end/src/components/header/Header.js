import React from 'react'
import './header.css'
import {NavLink,useLocation} from 'react-router-dom';
import {Button,makeStyles,withStyles} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone'
import LangIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Appbar from './Appbar';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    color:"black",
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 26px 2px 22px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    loginbtn:{
        marginTop:-30,
    }
  }));

export default function Header() {
    const classes = useStyles();
    const location=useLocation();
    const [loc,setLoc]=React.useState('');
    React.useEffect(()=>{
        setLoc(location.pathname);
        window.addEventListener('scroll',function(){
            var header=document.getElementsByClassName("nav-header");
            header[0].classList.toggle('sticky',window.scrollY>0);
        });
    })

    const [Lang, setLang] = React.useState('Eng');
    const handleChange = (event) => {
        setLang(event.target.value);
    };
    return (
        <div className="nav-header">
            <div className="smoll-screen">
                 <Appbar/>
            </div>
            <div className={loc=='/'?"header-front":"main-header"}>
                <div className="header">
                    <div className="top-header">
                        <div className="left-top-header">
                            <div className={loc=='/'?"logo":"logo2"}>
                                <h1>M3K Auction</h1>
                            </div>
                        </div>
                        <div className={loc=='/'?"right-top-header":"right-top-header2"}>
                            <span>
                            <a>
                                <PhoneIcon style={{color:"#000"}}/>
                                <p>Customer Support</p>
                            </a>
                            </span>
                            <div>
                                <span><LangIcon style={{color:"#000"}}/></span>
                                <FormControl >
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={Lang}
                                    color="primary"
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    >
                                    <MenuItem disabled>Language</MenuItem>
                                    <MenuItem value="Eng">Eng</MenuItem>
                                    <MenuItem value="Amh">Amh</MenuItem>
                                    <MenuItem value="Oro">Oro</MenuItem>
                                    <MenuItem value="Tig">Tig</MenuItem>
                                    <MenuItem value="sum">Sum</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <PersonIcon className="personIcon" style={{color:"#000"}}/>
                        </div>
                    </div>
                    <div className="bottom-header">
                        
                        <div className={loc=='/'?"nav-links":"nav-links2"}>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/autions">Auctions</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/catagory">Catagories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Button className={classes.loginbtn} variant="contained" color="primary"> 
                                <NavLink className="login" to="/login" >Login</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
