// ***   ComputationScreen.js   ***

import React from 'react'; 

const ComputationScreen = (props) => (
    <form onSubmit={props.enterListener}>
        <input 
            type="text" 
            value={props.children} 
            onChange={props.onChangeHandler} 
            className="computation-screen">
        </input>
        <input type="submit"></input>
    </form>
);

export default ComputationScreen; 