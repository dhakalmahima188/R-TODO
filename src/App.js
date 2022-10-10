
import './App.css';
import Header from './Components/Header'
import {Todos} from './Components/Todos'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
let todo=[
  {
    sn: 1,
    title:"first task",
    desc:"dance "
  },{
    sn:2,
    title:"AI",
    desc:"sing"
  }
]
function App() {
   const onDelete=()=>{
    console.log("Lets go to hell");

   }
  return (
    <>
   <Header title="TODO"/>
   <Todos todo={todo} onDelete={onDelete}/>
   </>
   
  );
}

export default App;