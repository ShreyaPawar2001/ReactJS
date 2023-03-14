import React from 'react';
import './card.css';

const Card = (props) => {
    // const classes =' card ' + props.className;
    return <div className='card'>{props.children}</div>
};
export default Card;
