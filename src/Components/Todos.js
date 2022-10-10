import React from 'react'
import {Items} from './Items'

export const Todos = (props) => {
  return (
    <div className='container'>
    {
      props.todo.map((todo)=>{
        return <Items todo={todo} onDelete={props.onDelete}/>
      })
    }
    
      
      </div>
  )
}
