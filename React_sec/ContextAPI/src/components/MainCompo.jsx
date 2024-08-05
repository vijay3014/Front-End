import React from 'react'
import ComponentsA from './CompoA'
import { createContext } from 'react'

/* ContextAPI , useContext() , Provider And Consumer */

export const data = createContext()
export const data1 = createContext()

const MainCompo = () => {

  let firstName = 'Vijay Don'
  let gender = 'Male'

  return (
    <div>
      <h1 className='heading'>This is MainCom</h1>
      <data.Provider value={firstName}>
        <data1.Provider value={gender}>
          <ComponentsA />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default MainCompo