import Api from "./Api"
import Form from "./Form"
import Todolist from "./Todolist"
import Incremint from "./incremint"

function App(){
    return(
        <div>
                <Todolist></Todolist>
                <Incremint></Incremint>
                <Form></Form>
                <Api></Api>
        </div>
    )
}
  export default App