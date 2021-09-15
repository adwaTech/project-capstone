import { Dialog, DialogTitle, IconButton, DialogContent, Backdrop, Button, WithStyles } from '@material-ui/core';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  GetAllAuctionAction
} from '../../../redux-state-managment/Actions';
import {
  BACKENDURL
} from '../../../redux-state-managment/Constants'
import './map.css';
import DetailDialog from '../../catagroy_slider/Detail';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
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
    margin: theme.spacing(7),
    width: "200px"
  },
}));

const EthStatelocations = [
  {
    name: "Addis Ababa",
    lat: 8.9806,
    lng: 38.7578,
  },
  {
    name: "Afar",
    lat: 8.9806,
    lng: 38.7578,
  },
  {
    name: "Amhara",
    lat: 11.59364,
    lng: 37.39077,
  },
  {
    name: "somali",
    lat: 8.9806,
    lng: 38.7578,
  },
  {
    name: "SNNPRE",
    lat: 8.9806,
    lng: 38.7578,
  },
  {
    name: "Harari",
    lat: 8.9806,
    lng: 38.7578,
  },
  {
    name: "Gamebela",
    lat: 8.9806,
    lng: 38.7578,
  },
  {
    name: "Dire Dawa",
    lat: 8.9806,
    lng: 38.7578,
  },
  {
    name: "Benshangul",
    lat: 8.9806,
    lng: 38.7578,
  },




]

export function MapContainer(props) {



  const classes = useStyles();
  const [zoom, setZoom] = React.useState(6);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    showingInfoWindow: false,
    activeMarker: { },
    selectedPlace: { },
    open: false,
    data: '',
    provence: "Addis Ababa"
  })
  const users = useSelector(state => state.getUsersReducer.admin_users);
  const token = useSelector(state => state.AccountReducer.token);

  const allauction = useSelector(state => state.AuctionsReducer.overallauction)
  React.useEffect(() => {
    dispatch(GetAllAuctionAction());
  }, [])
  function onMarkerClick(props, marker, e) {
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  function onMapClicked(props) {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  const [open, setOpen] = React.useState(false);
  const [Lang, setLang] = React.useState('Addis Ababa');
  const [loc, setLoc] = React.useState({
    lat: 8.9806,
    lng: 38.7578,
  })
  return (
    <div >


      <Map google={props.google}
        style={{ outerWidth: 1000 }}
        center={{
          lat: loc.lat,
          lng: loc.lng,
        }}
        zoom={zoom}

        onClick={onMapClicked}>


        {
          allauction.length > 0 ?
            allauction.map(user => (
              <Marker key={user._id}
                onClick={() => {
                  setState({ ...state, data: user });
                  setOpen(true);
                }}
                title={user.auctionName}
                name={user.auctionCategory}
                position={{ lat: user.latitude, lng: user.longtude }} />
            ))
            : null
        }

        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}>
          <div>
            <h1>{state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
        <FormControl className={classes.margin} variant="filled">
          <InputLabel id="demo-simple-select-filled-label">Provences</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={Lang}
            color="primary"
            onChange={(e) => {
              setLang(e.target.value);
              setLoc({
                lat:EthStatelocations.filter(a=>a.name===e.target.value).lat,
                lng:EthStatelocations.filter(a=>a.name===e.target.value).lng,
                
              });
              setZoom(10)
            }}
            input={<BootstrapInput />}
          >
            {
              EthStatelocations.map((loc, i) => (
                <MenuItem key={i} value={loc.name}>{loc.name.toString()}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

      </Map>

      <DetailDialog open={open} data={state.data} setOpen={setOpen} map="map" admin="admin" />

    </div>
  )
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8")
})(MapContainer);