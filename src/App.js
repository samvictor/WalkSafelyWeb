import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import logo from './favicon.png';
import './App.css';
import Login from './Components/Login';
import CameraFeed from './Components/CameraFeed';
/*global firebase*/

// Written by Sam Inniss
// SamInniss.com

class App extends Component {
  constructor() {
    super();

    var config = {
      apiKey: "AIzaSyB8khvBvOf4--34UfJlvUqKB10ASpKejOo",
      authDomain: "saminniss-df971.firebaseapp.com",
      databaseURL: "https://saminniss-df971.firebaseio.com",
      projectId: "saminniss-df971",
      storageBucket: "saminniss-df971.appspot.com",
      messagingSenderId: "911108518638"
    };
    firebase.initializeApp(config);


    this.state = {
      'user': 'loading',
      'auth': firebase.auth(),
      'db': firebase.database(),
      'storage': firebase.storage(),
    }
  }


  set_app_state(new_state) {
    this.setState(new_state);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/:path(home||index.html)" render={() => {
            if (this.state.user === 'no_user')
              return <Redirect to="login" />;
            else
              return [
                <h1>Home</h1>,
                <CameraFeed/>
              ]
          }} />
          <Route path="/login" render={(props) => (
            <Login app_state={this.state}
                    set_app_state={this.set_app_state.bind(this)}/>
          )} />
          <div className="alert alert-primary" role="alert">
          </div>
          <div className="alert alert-success" role="alert">
            Success!
          </div>
          <div className="alert alert-danger" role="alert">
            Error
          </div>
          <div className="alert alert-warning" role="alert">
            Warning
          </div>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    this.state.auth.onAuthStateChanged(function(user) {
      if(user) {
        this.setState({'user': user});
      }
      else {
        this.setState({'user': 'no_user'});
      }
    })
  }
}

export default App;
