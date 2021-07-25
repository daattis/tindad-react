import React, { useState } from 'react';
import Header from './Header';
import Cards from './Cards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import Chatscreen from './Chatscreen';
import Profile from './Profile';

function App() {

const [swipe, setSwipe] = useState(false);

const swipedCardsLeft = [];
const swipedCardsRight = [];

const onSwipe = (direction) => {
  if (direction === 'left') { 
    console.log("Left")
    swipedCardsLeft.push({/*id here*/})
  } else if (direction === 'right') {
    console.log("Right")
    swipedCardsRight.push({/*id here*/})
  }
   
  // find the card object which should be removed
  // swipe the card
  //note: maybe add i-box as a bootstrap bottom offcanvas?
}

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
            <SwipeButtons onSwipe={onSwipe}/>
          </Route>

      </Switch>

      </Router>
          
      
    </div>
  );
}

export default App;
