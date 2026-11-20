import { useState } from 'react'
import {Counter} from './Counter'
import {RandomNumber} from './RandomNumber'
function App() {
  return (
    <>
    <h1>here we are learning how to build counter Application....</h1>

    <Counter/>

    <h2 style={{textAlign:'center'}}>below is a random number generator</h2>

    <RandomNumber/>
    
    </>
  )
}

export default App
