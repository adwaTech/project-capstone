import './App.css';
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Store from './redux-state-managment/Store';
import {Provider} from 'react-redux';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import Register from './components/register/Index';
import Login from './components/login/Login';
import ErrorRoute from './components/error-route/ErrorRoute';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import ShowContext from './Context';
import Drawer from './components/drawer/Drawer';
import Home from './components/home/Home'
import DashBoardIndex from './components/dashboard/admin_dashboard/index';
import Auctions from './components/Auctions/Index';
import Car from './components/Auctions/AuctionCatagories/Car';
import Government from './components/Auctions/AuctionCatagories/Governments';
import Service from './components/Auctions/AuctionCatagories/Service';
import Catagoryindex from './components/Auctions/AuctionCatagories/CatagoryIndex'
import User from './components/customer/User';
import ScrollToTop from './scrollTop/ScrollToTop';
import OurServices from './components/ourservices/OurServices';
import Faq from './components/FAQ/Faq';
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import howToPost from './components/howToPost/howToPost';
import paymentOptions from './components/paymentOptions/paymentOptions';


function App() {
  const [sideToggle,setSideToggle]=React.useState(false)
  return (
    <Provider store={Store}>
      <ShowContext.Provider value={{sideToggle,setSideToggle}}>
      
      <Router>
      <Drawer />
      <ScrollToTop/>
          <Switch>
              <Route exact  path="/" component={Home}/>
              <Route exact  path="/home" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/autions" component={Auctions}/>
              <Route exact path="/house" component={Catagoryindex}/>
              <Route exact path="/car" component={Car}/>
              <Route exact path="/service" component={Service}/>
              <Route exact path="/our-services" component={OurServices}/>
              <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
              <Route exact path="/frequently-asked-questions" component={Faq}/>
              <Route exact path="/how-to-post" component={howToPost}/>
              <Route exact path="/how-to-bid" component={OurServices}/>
              <Route exact path="/payment-options" component={paymentOptions}/>
              <Route exact path="/government" component={Government}/>
              <ProtectedRoute exact path="/admin"  component={DashBoardIndex}/>
              <ProtectedRoute exact path="/profile" component={User}/>
              <Route path="*" component={ErrorRoute}/>
              
          </Switch>
      </Router>
      </ShowContext.Provider>
    </Provider>
  );
}

export default App;
