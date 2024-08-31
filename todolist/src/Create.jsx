import React, { useState } from 'react'; // Import React and useState
import axios from 'axios'; // Import axios for making HTTP requests
 //used to pass information to database

function Create() {
  const[task,setTask]=useState()//used to setthe value for the task
  const handleAdd=()=>{
                axios.post('http://localhost:3001/add',{task:task})
                .then(result => {
                  location.reload();
                })
                .catch(err => console.log(err))}
  return (
     <div className='home'>
      <div className='create_form'> {/* Apply the 'create_form' class */}
        <input type="text"  placeholder='Enter the Task' onChange={(e)=>setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Create
