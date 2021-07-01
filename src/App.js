import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Router>
      
      <Switch>
        <Route path="/chat">
          <h1> I'm the chatpage</h1>
        </Route>
        <Route path="/">
          <h1> I'm the homepage</h1>
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
