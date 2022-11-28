import React, {useState} from 'react'

function Todo({todoName,completed,id,completedToggler,deletesTodos,editingTodos,lightMode}) {

    const[editTodo, setEditTodo] = useState(false)
    const[newTodoName, setNewTodoName]= useState('')


    const newTodoHandler = (e) => {
        setNewTodoName(e.target.value)
    }

    const submitNewTodo = (e) => {
        e.preventDefault()
        editingTodos(id,newTodoName)
        setNewTodoName('')
        setEditTodo(false)
    }

    const EditingTodo = (
        <form className='editing__form'>
            <input 
                id ={id}
                type = "text" 
                value={newTodoName}
                onChange = {newTodoHandler}
            />
            <div>
                <button className='my__btn' type='button' onClick={()=> setEditTodo(false)}>Cancel</button>
                <button className='my__btn' type='button' onClick={submitNewTodo}>Save</button>
            </div>
        </form>
    )

    const newTodoList = (
        <div className= {lightMode ? 'light' : ''}>

        <div className='Todo'>
           <div className='todo__input'>
                <input
                         id={id} 
                         type= 'checkbox' 
                         defaultChecked = {completed}
                         onChange = {()=>completedToggler(id)}
                         className = {completed ? 'completed': ''}
                         />
                <label className = {completed ? 'completed': ''}
 htmlFor={id}>
                    {todoName}
                </label>
            </div>
            <div className='todo__btn'>
                <button className='my__btn' type='button' onClick={()=> setEditTodo(true)}>
                   <i className="fa fa-trash-o fa-lg">edit</i> 
                </button>
                <button 
                    className='my__btn'
                    type='button'
                    onClick={()=>deletesTodos(id)}
                    >
                        Delete
                </button>
             </div>
        </div>
        </div>
    )


  return (
    <div className="todo-container">
        
      <ul className="todo-list">
        <li>
          { editTodo ? EditingTodo : newTodoList }
        </li>
      </ul>
    </div>
  )
}

export default Todo