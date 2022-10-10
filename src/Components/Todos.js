import React from 'react'
import {Items} from './Items'


export const Todos = (props) => {
  return (
    

    <div className='container'>
<br></br>
<h5>Your TODOs :</h5>




      
     { props.todos.length===0? "Sakiyo TODOS, Enjoyy!!":
      props.todos.map((todo)=>{
        return <Items todo={todo} key={todo.sn} onDelete={props.onDelete}/>
      })
    }
    
      
      </div>
  )
}
