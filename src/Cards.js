import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./Cards.css";

function Cards () {

    const [people, setPeople] = useState([
    {
        name: 'Steve Jobs',
        url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
    },
    {
        name: 'Mark Zuckerberg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
    }
]);


return (<div>

<div className="tinderCards-cardContainer">
    {people.map((person) => (
        <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
        >
            <div 
            style={{backgroundImage: `url(${person.url})`}}
            className="card">
                <h3>{person.name}</h3>
            </div>
        </TinderCard> 
    ))}
    </div>
   </div>
);
}

export default Cards;