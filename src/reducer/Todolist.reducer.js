const initialState={
    todolist:["vamsi","sai","thanuja"]
}
function todolistreducer(state=initialState,action){
    if(action.type==="addtodo"){
        return{todolist:[...state.todolist,action.payload]}
    }
return state
}
export default todolistreducer