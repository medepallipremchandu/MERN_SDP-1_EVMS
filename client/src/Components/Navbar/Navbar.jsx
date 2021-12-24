import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Navbar.css';

import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import PropTypes from 'prop-types';


class Navbar extends Component {

  

  onLogoutClick = e => {
  
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <section className="navbar">
        
      
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <Link class="navbar-brand border-none" to="/">
            CMP
          </Link>
          <button
            class="navbar-toggler d-lg-none "
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <Link class="nav-link" to="/home1">
                  Home 
                </Link>
              </li> 
              <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Events
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/wedding">Wedding</a>
          <a class="dropdown-item" href="/birthday">Birthday</a>
          <a class="dropdown-item" href="/Concerts">Concerts</a>
          <a class="dropdown-item" href="/standup">standup</a>
          <a class="dropdown-item" href="/artshow">Art Showcases</a>
          <a class="dropdown-item" href="/fest">Fest</a>
          <a class="dropdown-item" href="/musical">Musicals</a>
          <a class="dropdown-item" href="/drama" >Drama</a>
          </div>
      </li>




              <li class="nav-item active">
                <Link class="nav-link" to="/contact">
                  Contact us 
                </Link>
              </li> 
              
              <li class="nav-item active">
                <Link class="nav-link" to="/teams">
                  Teams
                </Link>
              </li> 
              



                
            </ul>
            <button
                  onClick={this.onLogoutClick}
                
                  className="btn btn-danger "
                >
                  Logout
                </button>
          </div>
        </div>
      </nav>
      </section>
    );
  }
}


Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);