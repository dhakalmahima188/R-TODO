
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import React, {useState} from 'react';

export const AddTodo = (props) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=()=>{
        if(!title || !desc){
        alert("Blank detected")}
        props.addTodo(title,desc)
    

    }
  return (
    <div className='container'>

<Navbar bg="bright" expand="lg">
 
       <Navbar.Brand href="">REACT-TODO</Navbar.Brand>
      
   
  </Navbar>

        <h4>Add Todos</h4>
<Form >
    
      <Row>
        <Col>
       {/* natra type nai vayena */}
          <Form.Control value={title} onChange={(e)=>{setTitle(e.target.value)} } placeholder="Name" />
        </Col>
        <Col>
          <Form.Control value={desc} onChange={(e)=>{setDesc(e.target.value)} }  placeholder="Description" />
        </Col>
        <Col>
        <Button variant="primary" type="button" onClick={submit} >Add</Button>
        </Col>
      </Row>
    </Form>
        
    </div>
  )
}
