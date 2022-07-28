import React from 'react';
import './ToDoItem.css';
   
function ToDoItem (props) {
    const onComplete = () => {
        alert('Ya completaste el ToDo: ' + props.text);
    };

    const onDelete = () => {
        alert('Eliminaste el ToDo: ' + props.text);
    };

    return (
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onComplete}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
            className="Icon Icon-delete"
            onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export { ToDoItem };

