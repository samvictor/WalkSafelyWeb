import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
/*global navigator*/

// Written by Sam Inniss
// SamInniss.com

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" render={(props) => (
            [
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>,
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>,
              <video>
                Your browser does not support the video tag.
              </video>
          ]
          )} />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
       navigator.getUserMedia({ audio: false, video: {
                                                  facingMode: 'environment' }},
          function(stream) {
             var video = document.querySelector('video');
             video.srcObject = stream;
             video.onloadedmetadata = function(e) {
               video.play();
             };
          },
          function(err) {
             console.log("The following error occurred: " + err.name);
          }
       );
    }
    else {
       console.log("getUserMedia not supported");
    }
  }
}

export default App;
