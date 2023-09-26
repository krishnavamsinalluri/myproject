import { createSlice} from "@reduxjs/toolkit";
const initialState ={
    todo:["vamsi","sai"]
}
export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodos:(state,action)=>{state.todo.push(action.payload)},
        deletetodo:(state,action)=>{state.todo.splice(action.payload,1)}
    }
})
export const {addtodos,deletetodo}=todoSlice.actions
export default todoSlice.reducer