// ***   Screen.js    ***

import React from 'react'; 

import ResultScreen from './ResultScreen'; 
import ComputationScreen from './ComputationScreen'; 

const Screen = (props) => (
    <section className="screen">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen
            enterListener={props.enterListener} 
            onChangeHandler={props.onChangeHandler} >
            {props.equation}
        </ComputationScreen>
    </section>
);

export default Screen; 