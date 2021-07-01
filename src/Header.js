import React from 'react'
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

function Header () {
    return (
        <div className="header">
        <AccountCircleIcon />
            <h2>tindad</h2>
            <QuestionAnswerIcon />
        </div>
    )
}

export default Header;