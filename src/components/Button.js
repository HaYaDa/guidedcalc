// ***   Button.js   ***

import React from 'react'; 
import { type } from 'os';

const Button = (props) => {
    const classes = ['btn'];

    if (typeof props !== 'undefined' && typeof props.type !== undefined)
        classes.push('btn--' + props.type); 
    
    return (
        <button className={classes.join(' ')} onClick={props.onButtonPress}>
            {props.children}
        </button>
    );
};

export default Button; 