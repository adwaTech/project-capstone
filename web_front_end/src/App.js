import './App.css';
import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect, Link} from 'react-router-dom';
import Store from './redux-state-managment/Store';
import {Provider} from 'react-redux';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import Register from './components/register/Index';
import Login from './components/login/Login';
import ErrorRoute from './components/error-route/ErrorRoute';
import Contact from './components/contact/Contact';
// import About from './components/about/About';
import ShowContext from './Context';
import Drawer from './components/drawer/Drawer';
import Home from './components/home/Home'
import DashBoardIndex from './components/dashboard/admin_dashboard/index';
import Auctions from './components/Auctions/Index';
import Car from './components/Auctions/AuctionCatagories/Car';
import House from './components/Auctions/AuctionCatagories/House';
import Government from './components/Auctions/AuctionCatagories/Governments';
import Service from './components/Auctions/AuctionCatagories/Service';
import Catagoryindex from './components/Auctions/AuctionCatagories/CatagoryIndex'
import User from './components/customer/User';

function App() {
  const [sideToggle,setSideToggle]=React.useState(false)
  return (
    <Provider store={Store}>
      <ShowContext.Provider value={{sideToggle,setSideToggle}}>
      
      <Router>
      <Drawer />
          <Switch>
              <Route exact  path="/" component={Home}/>
              <Route exact  path="/home" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/register" component={Register}/>
              {/* <Route exact path="/about" component={About}/> */}
              <Route exact path="/login" component={Login}/>
              <Route exact path="/autions" component={Auctions}/>
              <Route exact path="/admin" component={DashBoardIndex}/>
              <Route exact path="/house" component={Catagoryindex}/>
              <Route exact path="/car" component={Car}/>
              <Route exact path="/profile" component={User}/>
              <Route exact path="/service" component={Service}/>
              <Route exact path="/government" component={Government}/>
              {/* <ProtectedRoute exact path="/dashboard/customer/:username"  component={CustomerDashBoard}/>
              <ProtectedRoute exact path="/dashboard/admin/:username" component={AdminDashBoard}/> */}
              <Route path="*" component={ErrorRoute}/>
          </Switch>
      </Router>
      </ShowContext.Provider>
    </Provider>
  );
}

export default App;
