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
        name="Tim"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://lh3.googleusercontent.com/proxy/X9l74cKeePJNBDwzMI5boxK92giB9GvGYtDsjZa8ucriFSCd8kju68p0XCqiTlC8E1ZHA4kl6vGJYYDTKybGDT5w7y-mAhW_p6C0vJLdHmAPC4AtzNteeh1IIGtR7cgD3DOtSZcaXBeqIkGubpbK8Ps"
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