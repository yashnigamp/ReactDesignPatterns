import React from 'react';

const Counter2 = (props) => {
    return (
        <button onClick={props.incCount} className="button2">
        {props.count}
         </button>
    )
}
export default Counter2