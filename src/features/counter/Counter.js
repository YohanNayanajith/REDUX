import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { increment,decrement } from './counterSlice'

const Counter = () => {
    // store -> counter -> counterSlice -> count variable
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=> {dispatch(increment())}}>+</button>
            <button onClick={()=> {dispatch(decrement())}}>-</button>
        </div>
    </section>
  )
}

export default Counter