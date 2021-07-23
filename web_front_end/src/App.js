import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Store from './redux-state-managment/Store';
import {Provider} from 'react-redux';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import ErrorRoute from './components/error-route/ErrorRoute';

function App() {
  return (
    <Provider store={Store}>
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <ProtectedRoute exact path="/dashBoard/:userName"  component={DashBoard}/>
              <Route path="*" component={ErrorRoute}/>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
