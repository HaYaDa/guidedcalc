// ***   KeypadRow.js   ***

import React from 'react'; 

//Note: Each React component has props (empty object in most cases) but are 
//updated behind the scenes when we pass properties. Individual properties can 
//be accessed via props.<name_of_property> while nested components are accessed 
//via props.children property access expression.

const KeypadRow = (props) => (
    <div className="keypad_row">
        {props.children}
    </div>
);

export default KeypadRow; 