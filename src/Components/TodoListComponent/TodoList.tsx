import React from 'react'
import { TODO } from '../../Dummy';

interface Props {

    
    todos:TODO[];
    setTodo:() => void
    
  }

const TodoList:React.FC<Props> = ({todos}) => {
  return (
    <div className='todolist'>
        {todos.map((todo)=>(
        <li>{todo.todo}</li>
))}
    </div>
  )
}

export default TodoList