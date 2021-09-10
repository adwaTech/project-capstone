import { Dialog, DialogTitle, IconButton, DialogContent, Backdrop } from '@material-ui/core';
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
import { useDispatch,useSelector } from 'react-redux';



export function MapContainer(props) {
  const dispatch=useDispatch();
  const [state, setState] = React.useState({
    showingInfoWindow: false,
    activeMarker: { },
    selectedPlace: { },
    open: false,
    data: ''
  })
  const users=useSelector(state=>state.getUsersReducer.admin_users);
  const token= useSelector(state=>state.AccountReducer.token)
  const allauction=useSelector(state=> state.AuctionsReducer.overallauction)
  React.useEffect(() => {
    dispatch(GetAllAuctionAction());
  }, [])
  function onMarkerClick(props, marker, e){
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  function onMapClicked (props) {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  const [open,setOpen]=React.useState(false);

  return (
    <div >
      <Map google={props.google}
        style={{outerWidth:1000}}
        initialCenter={{
          lat: 8.9806,
          lng: 38.7578,
        }}
        zoom={6}
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
      </Map>
      <DetailDialog open={open} data={state.data} setOpen={setOpen} map="map" admin="admin" />
    </div>
  )
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8")
})(MapContainer);