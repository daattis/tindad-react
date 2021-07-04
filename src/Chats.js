import React from 'react';
import './Chats.css';
import Chat from './Chat.js'

function Chats () {
    return (<div className="chats">
    <Chat 
        name="Mark"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://img.pngio.com/personal-png-7-png-image-personal-photo-png-2000_2000.png"
    />
    <Chat 
        name="Larry"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://img.pngio.com/personal-png-7-png-image-personal-photo-png-2000_2000.png"
    />
    <Chat 
        name="Clark"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://img.pngio.com/personal-png-7-png-image-personal-photo-png-2000_2000.png"
    />
    <Chat 
        name="Tim"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://img.pngio.com/personal-png-7-png-image-personal-photo-png-2000_2000.png"
    />
    <Chat 
        name="Mark"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://img.pngio.com/personal-png-7-png-image-personal-photo-png-2000_2000.png"
    />
    </div>);
}

export default Chats;