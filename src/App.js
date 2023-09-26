import React from 'react'

import { store } from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './features/counter/counter'
import Todo from './features/counter/todolist/todolist'

function App(){
    return (
        <div className='box'>
    
        <Provider store={store}>
         <Counter></Counter>
         <Todo></Todo>
        </Provider>
          </div>
            )

}
export default App