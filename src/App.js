import { Provider } from "react-redux"
import store from "./store/store"
import Counter from "./feature/Counter"
import Todolist from "./feature/Todolist"
function App(){
    return(
        <div>
          <Provider store={store}>
          <Counter></Counter>
          <Todolist></Todolist>
          </Provider>
        </div>
    )
}
  export default App