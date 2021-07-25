import React from 'react'
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom';



function Header ({backButton}) {
    // get browser session history with a hook
    const history = useHistory();

    return (
        <div className="header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIcon fontSize="large" className="header-icon"/>
            </IconButton>
        ) : (
        <Link to="/profile">
            <IconButton>
                <AccountCircleIcon className="header-icon" fontSize="large"/>
            </IconButton>
        </Link>
        )}
        
        <Link to="/" className="logo">
            <h2 className="logo">tindad</h2>
        </Link>
        
        <Link to="/chat">
            <IconButton>
                <QuestionAnswerIcon className="header-icon" fontSize="large"/>
            </IconButton>
        </Link>
        </div>
    )
}

export default Header;