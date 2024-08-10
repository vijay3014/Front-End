import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cake } from '../redux/Index'

const CakeContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)


    console.log(numOfCakes);
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1 className='bg-yellow-500'>NumOfCakes:{numOfCakes}</h1>
      <button onClick={() => dispatch(buy_cake())} className='bg-green-500'>Cake Decrement</button>
    </div>
  )
}

export default CakeContainer