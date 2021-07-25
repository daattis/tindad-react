
import React, { useState } from 'react';
import { Fragment } from 'react';
import Switch from 'react-input-switch';
import './Profile.css';

function Profile () {

    const [value, setValue] = useState('yes');

    return <div className="profile">
        <div>
        <h1>My profile</h1>
        <img alt="my-profile" className="profile-avatar" src="https://p0.pikist.com/photos/28/173/father-family-daughter.jpg"/>
        <div className="profile-items profile-name"><h2>Name:</h2><p>Joey Tribbiani</p></div>
        <div className="profile-items profile-age"><h2>Age:</h2><p>35</p></div>
        <div className="profile-items profile-kids"><h2>Kids:</h2><p>12/2018</p><p>3/2015</p></div>
        </div>

        <div className="settings">
        <h1>Settings</h1>

        <div className="settings-location">
        <p>Allow location</p> 

    <Fragment>      
        {value}
        <Switch on="yes" off="no" value={value} onChange={setValue}/>
    </Fragment>
</div>
        <p>Search range</p>
     
        </div>
    </div>

}

export default Profile;