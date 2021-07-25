import React from 'react';
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { IconButton } from '@material-ui/core';


const SwipeButtons = () => {

    const swipe = (something) => {
        console.log("Swiped " + something + "!");
        
        // find the card object which should be removed
        // swipe the card
    }

    return (
    <div
    className="swipeButtons">
        <IconButton className="swipebuttons-left" onClick={()=> {swipe('left')}}>
            <ClearIcon  fontSize="large"/>
        </IconButton>    
        <IconButton className="swipebuttons-info">
            <InfoOutlinedIcon  fontSize="large"/>
        </IconButton>
        <IconButton className="swipebuttons-right" onClick={()=> {swipe('right')}}>
            <FavoriteIcon  fontSize="large" />
        </IconButton>
    </div>
    )
}
export default SwipeButtons;