import './App.css';
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Store from './redux-state-managment/Store';
import {Provider} from 'react-redux';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import Register from './components/register/Index';
import Login from './components/login/Login';
import Home from './components/home/Home';
import CustomerDashBoard from './components/dashboard/user_dashboard/Dashboard';
import AdminDashBoard from './components/dashboard/admin_dashboard/Dashboard'
import ErrorRoute from './components/error-route/ErrorRoute';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import ShowContext from './Context';
import Drawer from './components/drawer/Drawer';


function App() {
  const [sideToggle,setSideToggle]=React.useState(false)
  return (
    <Provider store={Store}>
      <ShowContext.Provider value={{sideToggle,setSideToggle}}>
      <Drawer />
      <Router>
          <Switch>
              <Route exact  path="/" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <ProtectedRoute exact path="/dashboard/customer/:username"  component={CustomerDashBoard}/>
              <ProtectedRoute exact path="/dashboard/admin/:username" component={AdminDashBoard}/>
              <Route path="*" component={ErrorRoute}/>
          </Switch>
      </Router>
      </ShowContext.Provider>
    </Provider>
  );
}

export default App;
