import React, { useState } from 'react'
import './App.css'
import InputField from './Components/Inputfield/InputField'
import { TODO } from './Dummy'
import TodoList from './Components/TodoListComponent/TodoList'




const App:React.FC = () => {

  const [todo , setTodo] = useState <string>("")
  const [todos, setTodos] = useState<TODO[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault(); 
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])

      setTodo("")
    }

    
    
  }
  return (
    <div className='App'>
      <h2 className='text-info'>To do list in React with TS</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>

  )
}

export default App