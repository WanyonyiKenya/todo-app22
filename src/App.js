import React,{useState, useEffect} from 'react'
import './style.css'

import Form from './components/Form'
import Todo from './components/Todo'
import FormButtons from './components/FormButtons'




// const DATA = [
//   { id: "todo-0", todoName: "Workout", completed: true },
//   { id: "todo-1", todoName: "Sleep", completed: false },
//   { id: "todo-2", todoName: "Code", completed: false }
// ];

const Filtering = {
  All: () => true,
  Active: (todoact) => !todoact.completed,
  completed: (todoact) => todoact.completed 
}

const Filter_Todos = Object.keys(Filtering)


const App = () => {


  const[todoActivities,setTodoActivities]= useState(
    JSON.parse(localStorage.getItem('todoActivities')) || [ ]
     )

  const[filter, setFilter] = useState('All')


  useEffect(()=>{
    localStorage.setItem('todoActivities', JSON.stringify(todoActivities))
  },[todoActivities])


const newTodo = (todoName) =>{
  const newTodoItem = {id:Math.random()*1000, todoName,completed : false}
 todoName === '' ?  alert('Enter vaiid input') :setTodoActivities([...todoActivities, newTodoItem])
}

const checkComplete = (id) => {
  const completedTodos = todoActivities.map((todoact)=>
    id === todoact.id ? {...todoact, completed: !todoact.completed } : todoact
            //REMINDER
    //work on ensuring the toggle function does not work once the function is toggled completed.
  )
  setTodoActivities(completedTodos)
 
}

const clearCompleted = (completed) => {
  const remainingtodoAfterClear = todoActivities.filter((todoact)=>
  completed=  !todoact.completed
  )
  setTodoActivities(remainingtodoAfterClear)
  console.log(remainingtodoAfterClear)
}

const deleteTodo = (id) => {
    const remainingTodos = todoActivities.filter((todoact) => 
    id !== todoact.id
    )
    setTodoActivities(remainingTodos)
    console.log(todoActivities[0])
}


const EditTodo = (id, newTodoName) =>{
   setTodoActivities( oldTodos => {
        const newTodoArr = []
        for(let i = 0; i < oldTodos.length; i++){
          const oldTodo = oldTodos[i]
          if (oldTodo.id === id){
            newTodoArr.unshift({...oldTodo, todoName:newTodoName})
          } else{
            newTodoArr.push(oldTodo)
          }
        }
        return newTodoArr
   })
}


const newTodoItems = todoActivities.filter(Filtering[filter]).map((todoact)=> (
                                    <
                                    Todo
                                    key={todoact.id}
                                    id = {todoact.id}
                                    todoName = {todoact.todoName}
                                    completed = {todoact.completed}
                                    completedToggler = {checkComplete}
                                    deletesTodos = {deleteTodo }
                                    editingTodos = {EditTodo}
                                  />
                            ))

const filterTodos = Filter_Todos.map((name)=>(
       <FormButtons key = {name} 
                    setFilter = {setFilter}
                    name={name} 
                    pressed = {name === filter}
       />
))
const todoAmount = newTodoItems.length > 1 || newTodoItems.length === 0 ? 'Todo Items' : 'Todo Item'
const todoCounter = `${newTodoItems.length}  ${todoAmount} available`







  return (
    <div  className='App'>

        <div>
           <Form  
            newTodo = {newTodo}            
          />       
        </div>
      <div className='body__main'>
        <div>
        {newTodoItems}          
        </div>
       <div className='main__t'>
        <h6>{todoCounter}</h6>
        <div>
          {filterTodos}
        </div>
        <button onClick={clearCompleted} className='clear__completed'>Clear  ompleted</button>
       </div>  
     </div>   
    
    </div>
  )
}

export default App