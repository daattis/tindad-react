import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Router>
      
      <Switch>
        <Route path="/profile">
          <h1> I'm the profilepage</h1>
        </Route>
        <Route path="/chat">
          <h1> I'm the chatpage</h1>
        </Route>
        <Route path="/">
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
