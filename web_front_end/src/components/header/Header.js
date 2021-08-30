import React from 'react'
import './header.css'
import { NavLink, useLocation } from 'react-router-dom';
import { Button, makeStyles, withStyles } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { strings } from '../../language/language';
import { LanguageAction, LogoutAction, SearchAuctionAction } from '../../redux-state-managment/Actions';

import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Button1 from "../../components/dashboard/admin_dashboard/components/CustomButtons/Button.js";
import styles from "../../components/dashboard/admin_dashboard/assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import Timer from 'react-compound-timer';
import { BACKENDURL } from '../../redux-state-managment/Constants'


import {
    Link
} from 'react-router-dom';
import ArrowDownward from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';


import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';


const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

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
    loginbtn: {
        marginTop: -30,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    popper: {
        position: "fixed",
        right: 100,
        top: 100,
        width: 460,
        height: 400,
        overflowY: "scroll",
        boxShadow: "0 0 5px rgba(0,0,0,0.3)"
    }
}));

const useStyles1 = makeStyles(styles);

export default function Header() {
    const classes1 = useStyles1();
    const [openNotification, setOpenNotification] = React.useState(null);


    const auctionCategory = [strings.Land, strings.House, strings.Car, strings.service, strings.rare, strings.oldies];
    const dispatch = useDispatch();
    const classes = useStyles();
    const location = useLocation();
    const [loc, setLoc] = React.useState('en');
    React.useEffect(() => {
        setLoc(location.pathname);

        window.addEventListener('scroll', function () {
            var header = document.getElementsByClassName("nav-header");
            var header2 = document.getElementsByClassName("top-header");
            if (header[0] || header2[0]) {
                header[0].classList.toggle('sticky', window.scrollY > 0);
                header2[0].classList.toggle('sticky', window.scrollY > 0);
            }
        });
    }, [loc, location])
    const token = useSelector((state) => state.AccountReducer.token);
    const user = useSelector((state) => state.AccountReducer.user);

    // searched item

    const auctionsWithName = useSelector((state) => state.SearchAuctionReducer.auctionsWithName);
    const auctionsWithCategory = useSelector((state) => state.SearchAuctionReducer.auctionsWithCategory);
    const cities = useSelector((state) => state.SearchAuctionReducer.cities);
    const usersWithFirstName = useSelector((state) => state.SearchAuctionReducer.usersWithFirstName);
    const usersWithLastName = useSelector((state) => state.SearchAuctionReducer.usersWithLastName);

    let searchItem = auctionsWithCategory.length
        + auctionsWithName.length
        + cities.length
        + usersWithFirstName.length
        + usersWithLastName.length;

    const [Lang, setLang] = React.useState('en');
    const [searchitem, setSearchitem] = React.useState('')



    const handleClickNotification = async (event) => {

        if (openNotification && openNotification.contains(event.target)) {
            setOpenNotification(null);
        } else {
            setOpenNotification(event.currentTarget);
            await dispatch(SearchAuctionAction(searchitem));
            setSearchitem('');
        }
    };
    const handleCloseNotification = () => {
        setOpenNotification(null);
    };
    function timer(end) {
        const date = new Date(end.toString()).getTime();
        const now = new Date().getTime();
        return date - now
    }
    return (
        <div className="nav-header">
            <div className="smoll-screen">
                <CustomerDrawer />
            </div>
            <div className="header-front">
                <div className="header">
                    <div className="top-header">
                        <div className="left-top-header">
                            <div className={loc === '/' ? "logo" : "logo2"}>
                                <div>M3K {strings.Auction}</div>
                            </div>
                        </div>
                        <div className={loc === '/' ? "right-top-header" : "right-top-header2"}>
                            <span>
                                <a href="http://localhost:3000/">
                                    <PhoneIcon color="#000" />
                                    <p>{strings.CustomerSupport}</p>
                                </a>
                            </span>
                            <div>

                                <FormControl >
                                    <Select
                                        labelId="demo-customized-select-label"
                                        id="demo-customized-select"
                                        value={Lang}
                                        color="primary"
                                        onChange={(e) => {
                                            strings.setLanguage(e.target.value);
                                            dispatch(LanguageAction(e.target.value))
                                            setLang(e.target.value)
                                        }}
                                        input={<BootstrapInput />}
                                    >
                                        <MenuItem value="en">English</MenuItem>
                                        <MenuItem value="am">አማርኛ</MenuItem>
                                        <MenuItem value="or">Oromifa</MenuItem>
                                        <MenuItem value="ti">ትግርኛ</MenuItem>
                                        <MenuItem value="so">Somali</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            {
                                token
                                    ? <Link to="/profile">
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            badgeContent={<SmallAvatar alt="" src={`${BACKENDURL}/users/${user.idPhoto}`} />}
                                        >
                                            <Avatar alt="" src={`${BACKENDURL}/users/${user.profileImage}`} />
                                        </Badge>
                                    </Link>
                                    : null
                            }

                            <div style={{ marginRight: "50px" }}>
                                <NavLink
                                    onClick={() => {
                                        if (token) {
                                            dispatch(LogoutAction());
                                        }
                                    }}
                                    className="loginbtn" to="/login">
                                    <p>{token ? strings.Logout : strings.Login}</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-header">

                        <div className={"nav-links"}>
                            <ul>
                                <li>
                                    <NavLink className="a" to="/">{strings.Home}</NavLink>
                                </li>
                                <li>
                                    <NavLink className="a" to="/about">{strings.About}</NavLink>
                                </li>
                                <li>
                                    <NavLink className="a" to="/contact">{strings.Contact}</NavLink>
                                </li>
                                <li >
                                    <NavLink className="a" to="">{strings.Auctions}<ArrowDownward
                                        style={{ marginTop: "4px" }} /></NavLink>
                                    <ul className="dropdown">
                                        {
                                            auctionCategory.map((auction, i) => (
                                                <li key={i}><Link to={`/auction/${auction}`} >{auction}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li className="scoll-screen">
                                    {
                                        token
                                            ? <Link to="/profile">
                                                <Badge
                                                    overlap="circular"
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                    }}
                                                    badgeContent={<SmallAvatar alt="" src={`${BACKENDURL}/users/${user.idPhoto}`} />}
                                                >
                                                    <Avatar alt="" src={`${BACKENDURL}/users/${user.profileImage}`} />
                                                </Badge>
                                            </Link>
                                            : null
                                    }
                                </li>
                                <li className="scoll-screen">
                                    <FormControl >
                                        <Select
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                            value={Lang}
                                            color="primary"
                                            onChange={(e) => {
                                                strings.setLanguage(e.target.value);
                                                dispatch(LanguageAction(e.target.value))
                                                setLang(e.target.value)
                                            }}
                                            input={<BootstrapInput />}
                                        >
                                            <MenuItem value="en">English</MenuItem>
                                            <MenuItem value="am">አማርኛ</MenuItem>
                                            <MenuItem value="or">Oromifa</MenuItem>
                                            <MenuItem value="ti">ትግርኛ</MenuItem>
                                            <MenuItem value="so">Somali</MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>
                                <li className="scoll-screen">
                                    <NavLink
                                        onClick={() => {
                                            if (token) {
                                                dispatch(LogoutAction());
                                            }
                                        }}
                                        to="/login"><Button color="primary" variant="outlined">{token ? strings.Logout : strings.Login}</Button></NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="search-box">
                            {/* button */}
                            <div className="btn-search">
                                <Button1
                                    color={window.innerWidth > 959 ? "transparent" : "white"}
                                    justIcon={window.innerWidth > 959}
                                    simple={!(window.innerWidth > 959)}
                                    aria-owns={openNotification ? "notification-menu-list-grow" : null}
                                    aria-haspopup="true"
                                    onClick={handleClickNotification}
                                    className={classes1.buttonLink}
                                >
                                    <SearchIcon className={classes1.icons} />
                                    {searchItem === 0 ? null : <span className={classes1.notifications}>{searchItem}</span>}
                                    <Hidden mdUp implementation="css">
                                        <p onClick={handleCloseNotification} className={classes1.linkText}>
                                            search
                                        </p>
                                    </Hidden>
                                </Button1>
                                <Poppers
                                    open={Boolean(openNotification)}
                                    anchorEl={openNotification}
                                    transition
                                    disablePortal
                                    className={classes.popper}
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            id="notification-menu-list-grow"
                                            style={{
                                                transformOrigin:
                                                    "center bottom",
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleCloseNotification}>
                                                    <MenuList role="menu">

                                                        {
                                                            auctionsWithName.map(auction => (
                                                                <Link to={`/search/name/${auction._id}`}>
                                                                    <MenuItem
                                                                        key={auction._id}
                                                                        onClick={handleCloseNotification}
                                                                        className={classes1.dropdownItem}
                                                                    >
                                                                        <div className="searched-auction">

                                                                            <div
                                                                                style={{
                                                                                    display: "flex",
                                                                                    flexDirection: 'row',
                                                                                    alignItems: "center",
                                                                                    textAlign: "center"
                                                                                }}>
                                                                                {auction.images ? <Avatar alt="" src={`${BACKENDURL}/${auction.images[0]}`} className={classes.large} /> : null}
                                                                                <span>{auction.auctionName}</span>
                                                                                <span>{auction.auctionType}</span>
                                                                            </div>
                                                                            <div style={{
                                                                                display: "flex",
                                                                                flexDirection: 'row'
                                                                            }}>
                                                                                &nbsp;
                                                                                <Timer
                                                                                    initialTime={timer(auction.deadline)}
                                                                                    lastUnit="d"
                                                                                    direction="backward"
                                                                                >
                                                                                    {() => (
                                                                                        <React.Fragment>
                                                                                            <Timer.Days /> D	&nbsp;
                                                                                            <Timer.Hours /> H	&nbsp;
                                                                                            <Timer.Minutes /> M	&nbsp;
                                                                                            <Timer.Seconds /> S	&nbsp;
                                                                                        </React.Fragment>
                                                                                    )}
                                                                                </Timer>
                                                                                &nbsp;
                                                                                {auction.status === "ended"
                                                                                    ? <StyledBadge badgeContent="ended" color="secondary">
                                                                                    </StyledBadge>
                                                                                    : <StyledBadge badgeContent="pending" color="primary">
                                                                                    </StyledBadge>}

                                                                            </div>

                                                                        </div>
                                                                    </MenuItem>

                                                                </Link>
                                                            ))
                                                        }
                                                        {
                                                            auctionsWithCategory.map(auction => (
                                                                <Link to={`/search/catagory/${auction._id}`}>
                                                                    <MenuItem
                                                                        key={auction._id}
                                                                        onClick={handleCloseNotification}
                                                                        className={classes1.dropdownItem}
                                                                    >
                                                                        <div className="searched-auction">
                                                                            {auction.images ? <Avatar alt="" src={`${BACKENDURL}/${auction.images[0]}`} className={classes.large} /> : null}
                                                                            <span>{auction.auctionName}</span>
                                                                            <span>{auction.auctionType}</span>
                                                                            <div style={{
                                                                                display: "flex",
                                                                                flexDirection: 'row'
                                                                            }}>
                                                                                &nbsp;
                                                                                <Timer
                                                                                    initialTime={timer(auction.deadline)}
                                                                                    lastUnit="d"
                                                                                    direction="backward"
                                                                                >
                                                                                    {() => (
                                                                                        <React.Fragment>
                                                                                            <Timer.Days /> D	&nbsp;
                                                                                            <Timer.Hours /> H	&nbsp;
                                                                                            <Timer.Minutes /> M	&nbsp;
                                                                                            <Timer.Seconds /> S	&nbsp;
                                                                                        </React.Fragment>
                                                                                    )}
                                                                                </Timer>
                                                                                &nbsp;
                                                                                {auction.status === "ended"
                                                                                    ? <StyledBadge badgeContent="ended" color="secondary">
                                                                                    </StyledBadge>
                                                                                    : <StyledBadge badgeContent="pending" color="primary">
                                                                                    </StyledBadge>}

                                                                            </div>
                                                                        </div>
                                                                    </MenuItem>

                                                                </Link>
                                                            ))
                                                        }
                                                        {
                                                            cities.map(auction => (
                                                                <Link to={`/search/city/${auction._id}`}>
                                                                    <MenuItem
                                                                        key={auction._id}
                                                                        onClick={handleCloseNotification}
                                                                        className={classes1.dropdownItem}
                                                                    >
                                                                        <div className="searched-auction">
                                                                            <Avatar alt="" src={`${BACKENDURL}/${auction.profileImage}`} className={classes.large} />
                                                                            <span>{auction.city}</span>
                                                                        </div>
                                                                    </MenuItem>

                                                                </Link>
                                                            ))
                                                        }
                                                        {
                                                            usersWithFirstName.map(auction => (
                                                                <Link to={`/search/first_name/${auction._id}`}>
                                                                    <MenuItem
                                                                        key={auction._id}
                                                                        onClick={handleCloseNotification}
                                                                        className={classes1.dropdownItem}
                                                                    >
                                                                        <div className="searched-auction">
                                                                            <Avatar alt="" src={`${BACKENDURL}/${auction.profileImage}`} className={classes.large} />
                                                                            <span>{auction.firstName}&nbsp;{auction.lastName}</span>
                                                                        </div>
                                                                    </MenuItem>

                                                                </Link>
                                                            ))
                                                        }
                                                        {
                                                            usersWithLastName.map(auction => (
                                                                <Link to={`/search/last_name/${auction._id}`}>
                                                                    <MenuItem
                                                                        key={auction._id}
                                                                        onClick={handleCloseNotification}
                                                                        className={classes1.dropdownItem}
                                                                    >
                                                                        <div className="searched-auction">
                                                                            <Avatar alt="" src={`${BACKENDURL}/${auction.profileImage}`} className={classes.large} />
                                                                            <span>{auction.firstName}&nbsp;{auction.lastName}</span>
                                                                        </div>
                                                                    </MenuItem>
                                                                </Link>
                                                            ))
                                                        }
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Poppers>
                            </div>

                            {/* <button
                                onClick={async () => {
                                    await dispatch(SearchAuctionAction(searchitem));
                                    setSearchitem('');
                                }}
                                className="btn-search"><SearchIcon /></button> */}
                            <input
                                value={searchitem}
                                onChange={(e) => {
                                    setSearchitem(e.target.value);
                                }}
                                type="text" className="input-search" placeholder={`${strings.TypetoSearch}...`} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function CustomerDrawer() {
    return (
        <div className="custom-drawer">
            <section className="banner">
                <label htmlFor="menu-control" className="hamburger">
                    <i className="hamburger__icon"></i>
                    <i className="hamburger__icon"></i>
                    <i className="hamburger__icon"></i>
                </label>

                <input type="checkbox" id="menu-control" className="menu-control" />
                <aside className="sidebar">

                    <nav className="sidebar__menu">
                        <NavLink to="/">{strings.Home}</NavLink>
                        <NavLink to="/catagory/house">{strings.Auctions}</NavLink>
                        <NavLink to="/about">{strings.About}</NavLink>
                        <NavLink to="/contact">{strings.Contact}</NavLink>
                        <NavLink to="/login">{strings.Login}</NavLink>
                    </nav>

                    <label htmlFor="menu-control" className="sidebar__close"></label>

                    <ul className="sidebar__social">
                        <li>
                            <a href="http://localhost:3000/">
                                <svg viewBox="0 0 14 14" fill="none">
                                    <path d="M13.16 3.88c-.031-.702-.145-1.184-.307-1.601a3.219 3.219 0 00-.763-1.17 3.247 3.247 0 00-1.168-.761c-.42-.162-.9-.276-1.6-.307C8.614.008 8.39 0 6.598 0 4.808 0 4.583.008 3.88.039c-.7.03-1.183.144-1.6.306a3.22 3.22 0 00-1.17.763c-.336.33-.596.73-.761 1.168-.162.42-.276.9-.307 1.601C.008 4.583 0 4.807 0 6.599c0 1.792.008 2.016.039 2.72.03.7.144 1.183.306 1.6.168.444.428.841.763 1.17.33.336.73.596 1.168.761.42.163.9.276 1.601.307.704.031.928.039 2.72.039 1.791 0 2.016-.008 2.72-.039.7-.03 1.182-.144 1.6-.307a3.375 3.375 0 001.93-1.93c.163-.42.277-.9.308-1.601.03-.704.038-.928.038-2.72 0-1.791-.002-2.016-.033-2.72zM11.97 9.267c-.028.645-.136.993-.226 1.225a2.19 2.19 0 01-1.253 1.253c-.232.09-.583.198-1.225.226-.696.031-.905.039-2.665.039s-1.972-.008-2.666-.039c-.644-.028-.992-.136-1.224-.226a2.032 2.032 0 01-.758-.493 2.052 2.052 0 01-.492-.758c-.09-.232-.199-.582-.227-1.224-.031-.696-.039-.905-.039-2.666 0-1.76.008-1.972.039-2.665.028-.645.136-.993.227-1.225.105-.286.273-.546.495-.757.214-.22.471-.387.757-.493.232-.09.583-.198 1.225-.227.696-.03.905-.038 2.665-.038 1.764 0 1.972.007 2.666.038.644.029.992.137 1.224.227.286.106.547.273.758.493.22.214.387.471.493.757.09.232.198.583.226 1.225.031.696.04.905.04 2.665 0 1.761-.009 1.967-.04 2.663z" fill="#898989" />
                                    <path d="M6.6 3.21a3.39 3.39 0 100 6.78 3.39 3.39 0 000-6.78zm0 5.588a2.2 2.2 0 110-4.398 2.2 2.2 0 010 4.398zM10.915 3.075a.791.791 0 11-1.583 0 .791.791 0 011.582 0z" fill="#898989" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">
                                <svg viewBox="0 0 14 14" fill="none">
                                    <path d="M11.6472 0H1.54609C.693574 0 0 .693574 0 1.54609V11.6472c0 .8525.693574 1.5461 1.54609 1.5461H11.6472c.8525 0 1.5461-.6936 1.5461-1.5461V1.54609C13.1933.693574 12.4997 0 11.6472 0zm.5153 11.6472c0 .2842-.2311.5153-.5153.5153H8.70962V7.96235h1.59218l.2631-1.59763H8.70962V5.25669c0-.43741.33563-.77304.77304-.77304h1.05654V2.88603H9.48266c-1.31219 0-2.3701 1.06293-2.3701 2.37515v1.10354H5.56591v1.59763h1.54665v4.20015H1.54609c-.28417 0-.51537-.2311-.51537-.5153V1.54609c0-.28417.2312-.51537.51537-.51537H11.6472c.2842 0 .5153.2312.5153.51537V11.6472z" fill="#888" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">
                                <svg viewBox="0 0 14 14" fill="none">
                                    <path d="M6.59664 0C2.97108 0 0 2.99685 0 6.6224c0 3.6045 2.94401 6.5709 6.59664 6.5709 3.64806 0 6.59666-2.962 6.59666-6.5709C13.1933 2.99685 10.2222 0 6.59664 0zM7.7562 12.3043c-.37102.0773-.76529.1159-1.15956.1159-.39428 0-.78855-.0386-1.15957-.1159v-1.8089c0-.433.11596-.58756.27057-.79632.07871-.08999.12622-.17072.47922-.70339l-.59518-.09281C4.06099 8.67872 3.45806 7.88242 3.2184 7.26399c-.30922-.8271-.14686-1.86305.40977-2.52004.08505-.10056.15461-.27067.09281-.44843-.11606-.35562-.10056-.9199-.02326-1.13641.40988.05858.83133.3522 1.18282.56438.16196.09452.24691.06956.32462.07731.28244-.05879.72301-.20102 1.39923-.20102.41742 0 .85809.06181 1.29102.18551.0774-.00181.20182.06402.41742-.0618.3674-.22386.77456-.50741 1.18272-.56438.0773.21651.0928.78079-.02315 1.13641-.06191.17776.00765.34787.0928.44843.5565.65709.7189 1.69294.40968 2.52004-.23967.61843-.8426 1.41473-2.37329 1.63889l-.59518.09281c.36488.55059.40333.61662.47933.70339.1545.20876.27046.36332.27046.79632v1.8089zm.77304-.2242v-1.5847c0-.4407-.0928-.73442-.21651-.95093C9.4878 9.2276 10.3227 8.53176 10.6938 7.53455c.3942-1.05125.2165-2.30362-.4407-3.16947.116-.51788.116-1.34508-.1623-1.7316-.12368-.17001-.29379-.26281-.5102-.26281h-.00775c-.59941.03241-1.07119.33428-1.57699.64158-.46382-.12371-.9354-.18551-1.40697-.18551-.47923 0-.95856.06956-1.38363.18551-.53248-.32109-.99972-.60998-1.61574-.64158-.19326 0-.36337.0928-.48708.26281-.27822.38652-.27822 1.21372-.16226 1.7316-.65719.86585-.83495 2.12587-.44067 3.16947.37102.99721 1.20596 1.69305 2.38103 2.00992-.09593.16779-.17182.3843-.20172.67733-.23734.0818-.44319.1085-.63464.0522-.20191-.0597-.35924-.1944-.49593-.42434-.307-.51577-.82992-.93681-1.4253-.88206l.06794.77003c.2757-.02527.55009.26647.69262.50687.23514.396.5519.6557.94175.7709.28938.0852.55391.0832.83877.0224v1.0423C2.41445 11.2916.773043 9.14255.773043 6.6224c0-3.20038 2.623217-5.849357 5.823597-5.849357 3.20037 0 5.82356 2.648977 5.82356 5.849357 0 2.52015-1.6414 4.6692-3.89096 5.4577z" fill="#888" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </aside>
            </section>
        </div>
    )
}
