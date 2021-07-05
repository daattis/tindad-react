import React, { useState } from 'react';
import './Chatscreen.css';
import Avatar from '@material-ui/core/Avatar';


function Chatscreen () {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats up '
        },
        {
            name: 'Tim',
            image: '...',
            message: 'Hows it going!',
        },
        {
            message: 'Whats up',
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (

    <div className="chatScreen">
    
    <p className="chatScreen-timestamp">
    YOU MATCHED WITH ELLEN ON 10/08/20
    </p>
    {messages.map(message => (
        message.name ? (
            <div className="chatScreen-message">
                <Avatar 
                    className="chatScreen" 
                    alt={message.name} 
                    src={message.image} 
                />
                <p className="chatScreen-text">{message.message}</p> 
            </div>
        ) : (
            <div className="chatScreen-message">
                <p className="chatScreen-textUser">{message.message}</p> 
            </div>
        )
    ))}
    
        <form className="chatScreen-input">
            <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen-inputField" type="text" placeholder="Type a message"/>
            <button onClick={handleSend} type="submit" className="chatScreen-inputButton">SEND</button>
        </form>
    
    
    </div>
    )
}

export default Chatscreen;