import React from 'react'
import ComponentsB from '../components/Compo_B'

const Compo_A = (props) => {
  return (
    <div>
      <h1 className='heading'>This is Components A {props.name}</h1>
      <ComponentsB name={props.name}/>
    </div>
  )
}

export default Compo_A