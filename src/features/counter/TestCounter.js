import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement } from "./counterSlice";

const TestCounter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
  return (<section>
    <p>{count}</p>
    <button onClick={()=> dispatch(increment)}>+</button>
    <button onClick={()=> dispatch(decrement)}>-</button>
  </section>);
};

export default TestCounter;
