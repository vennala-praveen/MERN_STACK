import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {

  const [task, setTask] = useState();

  const handleAdd = () => {
    axios.post('http://localhost:4000/add', {task: task})
    .then(result => {
      location.reload(result)
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='create_form'>
        <input type="text" name="" id="" placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
        <button type="submit" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create