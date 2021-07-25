import React from 'react';
import Header from './Header';
import Cards from './Cards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import Chatscreen from './Chatscreen';
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

        <Route path="/chat/:person">
            <Header backButton="/chat" />
            <Chatscreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/profile">
            <Header backButton="/"/>
            <Profile />
            
          </Route>
        
          <Route path="/">
            <Header />
            <Cards />
            <SwipeButtons />
          </Route>

      </Switch>

      </Router>
          
      
    </div>
  );
}

export default App;
