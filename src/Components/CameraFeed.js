import React, { Component } from 'react';
import logo from '../favicon.png';
import '../App.css';
/*global navigator*/

// Written by Sam Inniss
// SamInniss.com

export default class CameraFeed extends Component {
  render() {
    return (
      <video>
        Your browser does not support the video tag.
      </video>
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
             console.log('The following error occurred: ' + err.name);
          }
       );
    }
    else {
       console.log('getUserMedia not supported');
    }
  }
}
