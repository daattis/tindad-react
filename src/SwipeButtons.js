import React from 'react';
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const SwipeButtons = () => {
    return (
    <div
    className="swipebuttons">

    <ClearIcon color="secondary" fontSize="large"/>
    <InfoOutlinedIcon color="primary" fontSize="medium"/>
    <FavoriteIcon className="swipebuttons-heart" fontSize="large" />
    
    </div>
    )
}
export default SwipeButtons;