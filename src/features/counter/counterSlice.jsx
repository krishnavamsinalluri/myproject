import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inceriment:(state)=>{state.counter=state.counter+1},
    deceriment:(state)=>{state.counter=state.counter-1},
    reset:(state)=>{state.counter=initialState.counter}
  }
})
export const {inceriment,deceriment,reset}=counterSlice.actions
export default counterSlice.reducer
