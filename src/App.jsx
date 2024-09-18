import React from 'react'
import { useState } from 'react'

const App = () => {
  const [counter, setcounter] = useState(0)
  const Add = ()=>{
    setcounter(counter+1);
    if (counter>=20){
      setcounter(counter)
    }
  }

  const Minus = ()=>{
    setcounter(counter-1);
    if (counter<=0){
      setcounter(counter);
    }
  }
  return (
    <>
    <div>
      <h1>Counter Project</h1>
      <button onClick={Add}>Add {counter}</button>
      <button onClick={Minus}>Minus {counter}</button>
    </div>
    </>
  )
}

export default App