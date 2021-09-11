import { Dialog, DialogTitle, IconButton ,DialogContent, Backdrop, Button} from '@material-ui/core';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  GetuserAction
} from '../../../redux-state-managment/Actions';
import {
  BACKENDURL
} from '../../../redux-state-managment/Constants'
import './map.css';
import {Delete,Edit} from '@material-ui/icons'


const mapStateToProps = state => ({
  users: state.getUsersReducer.admin_users,
  token: state.AccountReducer.token
});
const mapDispatchToProps = () => ({
  getuser: GetuserAction
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
    this.props.getuser(this.props.token)
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
            this.props.users.length > 0 ?
              this.props.users.map(user => (
                <Marker key={user._id}
                  onClick={() => {
                    this.setState({...this.state,open:true,data:user})
                  }}
                  title={user.firstName + " " + user.lastName}
                  name={user.city}
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
        <Dialog open={this.state.open}>
          <DialogTitle>
            <IconButton
            onClick={()=>{
              this.setState({...this.state,open:false})
            }}
            >x</IconButton>
            </DialogTitle>
            <DialogContent>
                <div className="userInfo-dialog">
                <div class="container">
                    <div class="card">
                      <div class="card-header">
                        <img src={`${BACKENDURL}/users/${this.state.data?this.state.data.idPhoto:null}`} alt="rover" />
                      </div>
                      <div class="card-body">
                        <span class="tag tag-teal">
                          {this.state.data?this.state.data.firstName:null} 	
                          &nbsp;
                          {this.state.data?this.state.data.lastName:null}
                          </span>
                        <h4>
                          {this.state.data?this.state.data.email:null}
                        </h4>
                        <p>
                        {this.state.data?this.state.data.sex:null}
                        </p>
                        <p>
                        {this.state.data?this.state.data.city:null}
                        </p>
                        <Button 
                        color="secondary"
                        onClick={()=>{

                        }}
                        ><Delete/> Delete</Button>
                        <Button
                        onClick={()=>{
                          this.setOpen(false)
                        }}
                        color="primary"
                        ><Edit/>Edit</Button>
                        <div class="user">
                          <img src={`${BACKENDURL}/users/${this.state.data?this.state.data.profileImage:null}`} alt="user" />
                          <div class="user-info">
                            <h5>
                            {this.state.data?this.state.data.firstName:null} 	
                            &nbsp;
                            {this.state.data?this.state.data.lastName:null}
                            </h5>
                            <small>
                            {this.state.data?this.state.data.phone:null}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
  

                </div>
                </div>
            </DialogContent>
        </Dialog>
        
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