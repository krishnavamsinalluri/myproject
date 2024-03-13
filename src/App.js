import { Provider } from "react-redux"
import store from "./store"
import Form from "./Form"
import Accontas from "./Accontas"


function App(){
    return(
        <div>
           < Provider store={store}>
                <Form></Form>
                <Accontas></Accontas>
           </Provider>
       </div>
    )
}
  export default App