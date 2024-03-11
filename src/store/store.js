import {combineReducers,createStore} from "redux"
import todolistreducer from "../reducer/Todolist.reducer"
import couterReducer from "../reducer/Counter.reducer"
var finalReducer=combineReducers({c:couterReducer,t:todolistreducer})
var store=new createStore(finalReducer)
export default store
