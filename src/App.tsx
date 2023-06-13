import React, { useState, useContext } from 'react'
import './App.css'
import InputField from './Components/Inputfield/InputField'
import { TODO } from './Dummy'
import TodoList from './Components/TodoListComponent/TodoList'
import { MdDarkMode } from 'react-icons/md'
import { ThemeContextR } from './ThemeProvider'
import NewThought from './Components/NewThought'






const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<TODO[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])

      setTodo("")
    }




  }
  const { theme, toggleTheme } = useContext(ThemeContextR);


  return (
    <div className='App'>
      <h2 className='text-info'>To do list in React with TS</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />

      <div className="theme">
        <h3>Change theme</h3>
        <MdDarkMode onClick={toggleTheme} className='theme_icon'>
          {theme === 'light' ? 'dark' : 'light'}
        </MdDarkMode>
      </div>

    
      <NewThought />
    
     

      

    </div>

  )
}

export default App