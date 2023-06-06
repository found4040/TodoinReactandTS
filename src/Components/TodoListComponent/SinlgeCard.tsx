import React, { useEffect, useRef, useState } from 'react'
import './Single.css'
import { TODO } from '../../Dummy';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {FaCheck} from 'react-icons/fa'



type Props = {
    todo:TODO;
    todos:TODO[]
    setTodos:React.Dispatch<React.SetStateAction<TODO[]>>;

    
}

const SinlgeCard = ({todos, setTodos,todo}: Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEdiTodo] = useState<string>(todo.todo)
  
  const HandleDone = (id:number) => {
    setTodos(todos.map((todo)=> todo.id === id ? {...todo, isDone: !todo.isDone} : todo) )

  }

  const HandleDelete = (id:number)=> {
        setTodos(todos.filter((todo)=> todo.id !==id))
  }

 const HandleEdit = (e:React.FormEvent,id:number) =>{
  e.preventDefault();

    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo, todo:editTodo}:todo


    )))

    setEdit(false);

   
   
 }

 const inputRef = useRef<HTMLInputElement>(null) 

 useEffect(()=>{
  inputRef.current?.focus();
 },[edit])

  return (
    
        <form className='single_card' onSubmit={(e)=>HandleEdit(e,todo.id)}>
        {
          edit ? (
            <input ref={inputRef} value={editTodo} onChange={(e)=> setEdiTodo(e.target.value)} className='single_input'/>

          ): (
            todo.isDone ? (
              <s className="card_left">{todo.todo}</s>

            )
            : (
              <div className="card_left">{todo.todo}</div>
            )

          )
        }

          
           
          
       
        <div className="card_right">
          <span><AiFillEdit onClick={()=> {
            if (!edit && !todo.isDone){
              setEdit(!edit)
            }
          }} className='me-2'/></span>
          <span><AiFillDelete onClick={()=> HandleDelete(todo.id)} className='me-2'/></span>
          <span><FaCheck onClick={() => HandleDone(todo.id)}/></span>
        </div>


        </form>

    
  )
}

export default SinlgeCard