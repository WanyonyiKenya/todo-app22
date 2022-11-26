import React from 'react'

const FormButtons = ({name,pressed,setFilter}) => {
  return (
    <div className='form__buttons'>
         <button type='button' 
                className='toggle-btn' 
                aria-pressed = {pressed}
                onClick = {()=>setFilter(name)}
          >
            <span className='hidden__info' >Show</span>
            <button className='name__span' >{name}</button>
           <span className='hidden__info'  >tasks</span>
         </button>
  </div>
  )
}

export default FormButtons