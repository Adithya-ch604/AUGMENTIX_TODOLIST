import React, { useState, useEffect } from 'react'; // Import useEffect
import axios from 'axios'; // Import axios
import Create from './Create';
import { BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from 'react-icons/bs'; // Import the icon from react-icons

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit=(id)=>{
    axios.put('http://localhost:3001/update/'+id)
    .then(result=>{
      location.reload();
    })
    .catch(err=>console.log(err));
  }

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result=>{
      location.reload();
    })
    .catch(err=>console.log(err));
  }

  return (
    <div>
      <h2 className="centered-heading">Todo List</h2>
      <Create />
      {
        todos.length === 0 ? (
          <div><h2 className="centered-heading">No Record</h2></div>
        ) : (
          todos.map((todo, index) => (
            <div className='task' key={index}> {/* Added the key prop here */}
              <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                {todo.done ?
                <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                : <BsCircleFill className='icon/' />
                }
                
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' onClick={()=> handleDelete(todo._id)}/></span>
                </div>
            </div>
          ))
        )
      }
    </div>
  );
}

export default Home;
