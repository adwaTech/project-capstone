import { Dialog, DialogTitle, IconButton ,DialogContent, Backdrop} from '@material-ui/core';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  GetAllAuctionAction
} from '../../../redux-state-managment/Actions';
import {
  BACKENDURL
} from '../../../redux-state-managment/Constants'
import './map.css';
import DetailDialog from '../../catagroy_slider/Detail';


const mapStateToProps = state => ({
  users: state.getUsersReducer.admin_users,
  token: state.AccountReducer.token,
  allauction: state.AuctionsReducer.overallauction
});
const mapDispatchToProps = () => ({
  allauctiondispatch:GetAllAuctionAction
});
export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: { },
    selectedPlace: { },
    open:false,
    data:''
  };
  componentDidMount() {
    this.props.allauctiondispatch()
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div>
        <Map google={this.props.google}
          initialCenter={{
            lat: 8.9806,
            lng: 38.7578,
          }}
          zoom={6}
          onClick={this.onMapClicked}>
          {
            this.props.allauction.length > 0 ?
              this.props.allauction.map(user => (
                <Marker key={user._id}
                  onClick={() => {
                    this.setState({...this.state,open:true,data:user})
                  }}
                  title={user.auctionName}
                  name={user.auctionCategory}
                  position={{ lat: user.latitude, lng: user.longtude }} />
              ))
              : null
          }

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
        <DetailDialog open={this.state.open} data={this.state.data} setOpen={this.setState} state={this.state} map="map"/>
      </div>
    )
  }
}
const conn = connect(
  mapStateToProps,
  mapDispatchToProps()
)(MapContainer);

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8")
})(conn);