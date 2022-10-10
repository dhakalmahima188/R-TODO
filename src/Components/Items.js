import React from 'react'

export const Items = ({todo,onDelete}) => {
  return (
    <div>
<h4>{todo.sn}</h4>
<h4>{todo.title}</h4>
<h4>{todo.desc}</h4>
<button onClick={onDelete}>Delete</button>
 

    </div>
  )
}

