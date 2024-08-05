import React from 'react'
import ComponentsA from '../components/Compo_A'

const MainCompo = (props) => {
  return (
    <div>
      <h1 className='heading'>This is MainCom</h1>
      <ComponentsA name='ReactJs'/>
    </div>
  )
}

export default MainCompo