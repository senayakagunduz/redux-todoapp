import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo, editTodo } from "../redux/todoSlice"
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import {FcApprove, FcDisapprove} from "react-icons/fc";
const TodoItem = ({ id, title, completed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTodoText, setNewTodoText] = useState(title);

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({ id: id, completed: !completed }))
    }
    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: id }))
    }
    const handleEditClick = () => {
        setIsEditing(true);
    }
    const handleSaveClick = () => {
        dispatch(editTodo({ id, newText: newTodoText,completed }))
        setIsEditing(false);
    }
    const handleInputChange = (e) => {
        setNewTodoText(e.target.value);
    }
   
    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                {isEditing ? (
                    <span className='d-flex align-items-center'>
                        <input
                            type='checkbox'
                            className='mr-3'
                            checked={completed}
                            onChange={handleCompleteClick}
                        />
                        <input
                            type='text'
                            className='mr-3'
                            value={newTodoText}
                            onChange={handleInputChange}
                        />
                        <FcApprove
                            onClick={handleSaveClick}
                            className='text-success fs-3'
                        />
                        <FcDisapprove
                            className='fs-3'
                            onClick={()=>setIsEditing(false)}
                            
                        />
                    </span>
                ) : (
                    <span>
                        {title}
                        <BsFillPencilFill
                            onClick={handleEditClick}
                            className='text-success'
                        />
                        <BsFillTrashFill
                            onClick={handleDeleteClick}
                            className='text-danger ml-3'
                        />
                    </span>
                )}


            </div>
        </li>
    )
}

export default TodoItem