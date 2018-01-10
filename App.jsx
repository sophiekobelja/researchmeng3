import React from 'react';
import * as firebase from "firebase";
import MessageList from './components/MessageList';
import Header from './components/Header';
var config = {
    apiKey: "AIzaSyBe5V4Xj9_D2JAWw-5k6gUeRTRtxfXPCSc",
    authDomain: "my-project-1475361030701.firebaseapp.com",
    databaseURL: "https://my-project-1475361030701.firebaseio.com",
    projectId: "my-project-1475361030701",
    storageBucket: "my-project-1475361030701.appspot.com",
    messagingSenderId: "791150778489"
  };
firebase.initializeApp(config);
class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	      error: null,
	      isLoaded: false,
	      items: []
	    };
	  }
  

  render(){
    return (
      <div className="container">
            <Header title="Simple Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
        </div>
    )
  }
}
export default App;
