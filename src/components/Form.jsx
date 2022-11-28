import React,{useState} from 'react'
 
import background from '../Assets/bg-desktop-dark.jpg'




const Form = ({newTodo, lightMode,toggleLightMode}) => {

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
    <nav className= {lightMode ? 'light' : ''}>
    <div className='form__style'  style={{backgroundImage:`url(${background})` }}>
    <header>
      <h1>To Do</h1> 
        <div 
                className="toggler" 
        >
                <p className="toggler--dark">Dark</p>
                <div 
                    className="toggler--slider"
                    onClick={toggleLightMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--light">Light</p>
        </div>
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
   </nav>
  )
}

export default Form