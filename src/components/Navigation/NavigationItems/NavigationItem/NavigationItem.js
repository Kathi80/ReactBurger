import React from 'react';

import './NavigationItem.css'

const navigationItem = (props) => {
    /*let className = 'NavigationItem';
    if (props.active) {className +=' active'};*/
   
    return (
    <li className='NavigationItem'>
        <a href = {props.link}   
        className={props.active ? ' active' : null}>
        {props.children}</a>
    </li>
    )
};

    

export default navigationItem ;
