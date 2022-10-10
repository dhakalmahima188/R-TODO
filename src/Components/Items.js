import React from 'react'
import Button from 'react-bootstrap/Button';

export const Items = ({todo,onDelete}) => {
  return (
   
    <div>

<h4>{todo.title}</h4>
<p>{todo.desc}</p>
{/* fxn call haina ki pass garepar matra delete click huda 1 time render hunxa */}
<Button onClick={()=>{onDelete(todo)}} type="Danger">Done</Button>
 

    </div>
  )
}

