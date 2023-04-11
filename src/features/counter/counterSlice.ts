
import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "./counterState";

interface UserState {
  id?: number
  count: number
}

const initialState: UserState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload
    },
    increment: (state) => {
      state.count += 1      
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    incrementBy: (state, action) => {
      state.count += action.payload
    }
  }
}) 

export const { increment, decrement, reset, incrementBy, setUser } = counterSlice.actions
export default counterSlice.reducer