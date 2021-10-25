import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


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
import Catagory from './components/catagory/index';
import User from './components/customer/User';
import Search from './components/search/index';
import ScrollToTop from './scrollTop/ScrollToTop';
import OurServices from './components/ourservices/OurServices';
import Faq from './components/FAQ/Faq';
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import howToPost from './components/howToPost/howToPost';
import HowToBid from './components/howToBid/HowToBid';
import paymentOptions from './components/paymentOptions/paymentOptions';
import { CookiesProvider, withCookies, useCookies } from 'react-cookie';
import Auction_map from './components/dashboard/admin_dashboard/Auction_map';
import Header from './components/header/Header';
import { SetCookieAction } from './redux-state-managment/Actions';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const [sideToggle, setSideToggle] = React.useState(false)
  const [cookiesUser, setCookieUser] = useCookies(['user']);
  const [cookiesToken, setCookieToken] = useCookies(['token']);
  const token = useSelector((state) => state.AccountReducer.token);
  const user = useSelector((state) => state.AccountReducer.user);

  React.useEffect(() => {
    dispatch(SetCookieAction({ token: cookiesToken.token, user: cookiesUser.user }))
  }, [])
  return (
    <CookiesProvider>


      <ShowContext.Provider value={{ sideToggle, setSideToggle }}>
        <Router>
          {
            token
              ?
              user ? user.userType === "customer"
                ? <Redirect to='/profile' /> : null
                : null : null
          }
          {
            token ? user ? user.userType === "admin"
              ? <Redirect to="/admin" /> : null : null : null
          }
          <Drawer />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/map/auction" >
              <Header />
              <div style={{ position: "relative", top: "150px", width: "100%" }}></div>
              <div style={{
                position: "absolute",
                top: "20vh",
                width: "100%",
                height: "90vh"
              }}>
                <Auction_map />
              </div>
            </Route>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/auction/:type" component={Catagory} />
            <Route exact path="/our-services" component={OurServices} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/frequently-asked-questions" component={Faq} />
            <Route exact path="/how-to-post" component={howToPost} />
            <Route exact path="/how-to-bid" component={HowToBid} />
            <Route exact path="/payment-options" component={paymentOptions} />
            <ProtectedRoute exact path="/admin" component={DashBoardIndex} />
            <ProtectedRoute exact path="/profile" component={User} />
            <ProtectedRoute exact path="/admin/:route" component={DashBoardIndex} />
            <Route exact path="/search/:type/:search_item" component={Search} />
            <Route path="*" component={ErrorRoute} />
          </Switch>
        </Router>
      </ShowContext.Provider>
    </CookiesProvider>
  );
}

export default withCookies(App);
