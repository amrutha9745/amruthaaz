import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useState, useEffect }  from "react";



export default function App() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    getData();

  }, []);
  const getData =async () => {
    try {
      const incomingData =await fetch(
        "https://jsonplaceholder.typicode.com/todos"


      );
      const formattedData = await incomingData.json();
      setTodo(formattedData);
    console.log(formattedData);
      } catch (error) {
         console.log(error);
      }
      
    };
    
    

      
    
  
  return (
    <div>
      <container className="my-5">
      <h1 className="my-5 text-center display-2">TODO LIST</h1>

     <Table striped bordered hover>
      <thead>
        
    
      <tr>
          <td>id</td>
          <td>Title</td>
          <td>Completed</td>
        </tr>
        </thead>
        <tbody>
      
        {todos.map((todo,i) => (
          <tr key={todo.id}>
            <td>{i+1}</td>
            <td className={todo.completed ? 'text-success' : 'text-danger'}>{todo.title}</td>
            <td>{todo.completed ? 'yes' : 'No'}</td>
          </tr>
        ))}
        
      </tbody>
    </Table> 
    </container>
    </div>
  );
        }
