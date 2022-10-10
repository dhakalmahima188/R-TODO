


import {AddTodo} from './Components/AddTodo'
import {Todos} from './Components/Todos'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, {useState} from 'react';






function App() {

  const addTodo=(title, desc)=>{
console.log("I am adding TODO",title,desc)

if (todos.length===0){
  var sn=1;
}
else
{ sn=todos[todos.length-1].sn+1;}
const myTodo={
  sn:sn,
  title:title,
  desc:desc
}
setTodos([...todos,myTodo]);
console.log(myTodo)

  }
  const onDelete=(todo)=>{
    console.log("Lets go to hell",todo)
    setTodos(todos.filter((e)=>{
     
      return e!==todo;
    }))

   }

  const [todos,setTodos]=
  useState([  ])


  
  return (
    <>
   
   <AddTodo addTodo={addTodo} />
   <Todos todos={todos} onDelete={onDelete}/>
   
   </>
   
  );
}

export default App;