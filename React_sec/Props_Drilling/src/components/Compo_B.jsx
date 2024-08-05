import React from 'react'
import ComponentsC from '../components/Compo_C'

const Compo_B = (props) => {
  return (
    <div>
      <h1 className='heading'>This is Components B {props.name}</h1>
      <ComponentsC name={props.name}/>
    </div>
  )
}

export default Compo_B