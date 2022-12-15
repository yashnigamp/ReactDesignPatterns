import React from 'react';

const Counter1 = (props) => {
    return (
        <button onClick={props.incCount} className="button1">
        {props.count}
         </button>
    )
}
export default Counter1