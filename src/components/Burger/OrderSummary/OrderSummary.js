import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

import '../../UI/Button/Button.css'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
    return  (<li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delitious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul> 
            <p>Continue to Checkout?</p>
            <button 
                style={{color: 'red'}} 
                className='Button'
                onClick={props.purchaseCancelled}>CANCEL</button>
            <button 
                style={{color: 'green'}} 
                className='Button'
                onClick={props.purchaseContinue}>CONTINUE</button>
 
        </Auxiliary>
    )
};

export default orderSummary;