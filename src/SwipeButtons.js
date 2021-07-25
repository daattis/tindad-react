import React from 'react';
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { IconButton } from '@material-ui/core';


const SwipeButtons = ({onSwipe}) => {

    return (
    <div
    className="swipeButtons">
        <IconButton className="swipebuttons-left" onClick={() => onSwipe('left')}>
            <ClearIcon  fontSize="large"/>
        </IconButton>    
        <IconButton className="swipebuttons-info">
            <InfoOutlinedIcon  fontSize="large"/>
        </IconButton>
        <IconButton className="swipebuttons-right" onClick={() => onSwipe('right')}>
            <FavoriteIcon  fontSize="large" />
        </IconButton>
    </div>
    )
}
export default SwipeButtons;