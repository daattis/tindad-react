import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

     
          <Route path="/profile">
            <Header backButton="/"/>
            <h1> I'm the profilepage</h1>
          </Route>
        
          <Route path="/">
            <Header />
            <Cards />
            <SwipeButtons />
          </Route>
      </Switch>

      {/*Buttons below tinder cards*/}

      {/*Chats screen*/}
      {/*Individual chats screen*/}

      {/*Chats screen*/}
      </Router>
          
      
    </div>
  );
}

export default App;
