import React from 'react'

interface Props {

  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e:React.FormEvent) => void
}

const InputField:React.FC<Props> =({todo, setTodo,handleAdd}:Props) => {
  return (
    <div className='input_div ' >
   <form className='row' onSubmit={handleAdd} >
   <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}  placeholder='Enter Task here' className='input form-control  form-control-lg' />
        <button className='btn mt-3 btn-success' type='submit'>Add</button>
    </form>     
    </div>
  )
}

export default InputField