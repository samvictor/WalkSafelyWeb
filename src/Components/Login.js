import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import logo from '../favicon.png';
import '../App.css';
import CameraFeed from './CameraFeed.js';
/*global $*/
/*global firebase*/

// Written by Sam Inniss
// SamInniss.com

export default class Login extends Component {
  render() {
    return (
      [
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Walk Safely!</h1>
        </header>,
        <CameraFeed/>,

        <div id="login_panel">
          <h3>LOGIN / SIGNUP</h3>
          <input id="email" className="form-control" placeholder="Email" type="email"/>
          <input id="password" className="form-control" placeholder="Password" type="password"/>
          <button id="login" type="button" className="btn btn-primary">Login</button>
          <button id="signup" type="button" className="btn btn-success">Signup</button>
        </div>
      ]
    );
  }

  componentDidMount() {
    $('#login').click(function() {
      firebase.auth().signInWithEmailAndPassword(
                        document.querySelector('#email').value,
                        document.querySelector('#password').value
                      )
      .catch(function(error) {
        $('.alert-danger').text("Login unsuccessful: " + error.message)
            .fadeIn().delay(3000).fadeOut();
      });
    });
  }
}
