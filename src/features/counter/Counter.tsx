import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../core/store";
import { decrement, increment, incrementBy, reset } from "./counterSlice";

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }


  return <section>
    <p>{count}</p>
    <div>
    <button type="button" onClick={() => {
        dispatch(decrement())
      }}>-</button>
      <button type="button" onClick={() => {
        dispatch(increment())
      }}>+</button>
    </div>
    <input
      type="text" 
      value={incrementAmount}
      onChange={(e) => {
        const addValue = Number(e.target.value) || 0
        setIncrementAmount(addValue)
      }}
    />
     <div>
    <button type="button" onClick={() => {
        dispatch(incrementBy(incrementAmount))
      }}>Add amount</button>
      <button type="button" onClick={resetAll}>Reset</button>
    </div>

  </section>
}