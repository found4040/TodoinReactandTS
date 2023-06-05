import React from 'react'
import './single.css'
import { TODO } from '../../Dummy';

type Props = {
    todo:TODO;
    todos:TODO[]

    setTodos:React.Dispatch<React.SetStateAction<TODO[]>>
    
}

const SinlgeCard = ({todos, setTodos,todo}: Props) => {
  return (
    <div>
        <form className='single_card'>
            <span className='single_card_text'>{todo.todo}</span>
        </form>

    </div>
  )
}

export default SinlgeCard