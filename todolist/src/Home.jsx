import React, { useState } from 'react'
import Create from './Create'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, []);

    const handleEdit = (id) =>{
        axios.put('http://localhost:4000/update/' +id)
        .then(result => {
            location.reload(result)
        })
        .catch(err => console.log(err))

    }

    const handleDelete = (id) =>{
        axios.delete('http://localhost:4000/delete/' +id)
        .then(result => {
            location.reload(result)
        })
        .catch(err => console.log(err))

    }


    return (
        <div className='home'>
            <h2>To-Do List</h2>
            <Create/>

            {
                todos.length === 0
                ?
                <div><h2>No Records</h2></div>
                :
                todos.map(todo => {
                    return (
                        <div className="task" key={todo._id}>
                            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                                {todo.Done ?
                                    <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                                : <BsCircleFill className='icon'/>
                                }
                                
                                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
                            </div>
                        </div>
                    )
                })

            }

        </div>
    )
}

export default Home