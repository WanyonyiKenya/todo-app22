import React,{useState} from 'react'
 
import background from '../Assets/bg-desktop-dark.jpg'




const Form = ({newTodo}) => {

  const[todoName, setTodoName]= useState('')


  const inputChange = (e) =>{
      setTodoName(e.target.value)
  }

    const submitTodo = (e) => {
    e.preventDefault()
    newTodo(todoName)
    setTodoName('')
  }

  return (
    <div className='form__style'  style={{backgroundImage:`url(${background})` }}>
    <header>
      <h1>My to do List</h1> 
    </header>
     <form >
       <input
        type="text" 
        className="todo-input"
        name='text'
        autoComplete='off'
        id='todoform'
        value={todoName}
        onChange ={inputChange}
         />
        
       <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
       </button>

    </form>
   </div>
  )
}

export default Form