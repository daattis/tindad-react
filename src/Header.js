import React from 'react'
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom'


function Header () {
    return (
        <div className="header">
        <IconButton>
            <AccountCircleIcon className="header-icon" fontSize="large"/>
        </IconButton>
            <h2 className="logo">tindad</h2>
        <Link to="/chat">
            <IconButton>
                <QuestionAnswerIcon className="header-icon" fontSize="large"/>
            </IconButton>
        </Link>
        </div>
    )
}

export default Header;