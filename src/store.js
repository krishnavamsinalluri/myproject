import {createStore } from "redux"
var initialState={
    balance:0,
    username:"",
    mobile:null
}
function reducer(state=initialState,action){
if(action.type==="deposit")
return {...state,balance:state.balance+ +action.payload}
else if(action.type==="withdraw")
return {...state,balance:state.balance- +action.payload}
else if(action.type==="updateusername")
return{...state,username:action.payload}
else if(action.type="updatenumber")
return {...state,mobile:action.payload}
return state
}
 var store=createStore(reducer)
 export default store
