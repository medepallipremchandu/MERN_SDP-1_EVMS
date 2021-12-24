import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './Components/private-route/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from "./Components/contact"
import About from "./Components/About"
import Home1 from "./Components/Home1"
import Wedding from "./Components/Wedding";
import Birthday from "./Components/Birthday";
import Concerts from "./Components/Concerts";
import Standup from "./Components/Standup";
import Artshow from "./Components/Artshow";
import Fest from "./Components/Fest";
import Musical from "./Components/Musical";
import Drama from "./Components/Drama";
import Teams from "./Components/Teams";
import Booking from "./Components/Booking";

function App() {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = './login';
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/About" component={About} />
          <PrivateRoute path="/contact" component={Contact} />
          <PrivateRoute path="/Home1" component={Home1} />
          <PrivateRoute path="/wedding" component={Wedding} />
          <PrivateRoute path="/Birthday" component={Birthday} />
          <PrivateRoute path="/Concerts" component={Concerts} />
          <PrivateRoute path="/Standup" component={Standup} />
          <PrivateRoute path="/Artshow" component={Artshow} />
          <PrivateRoute path="/Fest" component={Fest} />
          <PrivateRoute path="/Musical" component={Musical} />
          <PrivateRoute path="/Drama" component={Drama} />
          <PrivateRoute path="/teams" component={Teams} />
          <PrivateRoute path="/Booking" component={Booking} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
