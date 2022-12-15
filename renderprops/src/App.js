import React from "react";
import Wrapper from './Components/Wrapper'
import Counter1 from './Components/Counter1'
import Counter2 from './Components/Counter2'

import './index.css'
const App = () => {
    return(
        <>
       <h1>
        Render Props
       </h1>
        <Wrapper
        render = {(counter,incCount)=> {
            return <Counter1 count = {counter} incCount = {incCount}/>
        }}
        />
        <Wrapper
        render = {(counter,incCount)=> {
            return <Counter2 count = {counter} incCount = {incCount}/>
        }}
        />
        </>
    )
}

export default App;