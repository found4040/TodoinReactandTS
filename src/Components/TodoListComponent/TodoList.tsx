import React from 'react'
import { TODO } from '../../Dummy';
import SinlgeCard from './SinlgeCard';

interface Props {

    
    todos:TODO[];
    setTodos:React.Dispatch<React.SetStateAction<TODO[]>>
    
  }

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todolist'>
        {todos.map((todo)=>(
        <SinlgeCard todos={todos} todo={todo} setTodos={setTodos} key={todo.id} /> 
))}
    </div>
  )
}

export default TodoList