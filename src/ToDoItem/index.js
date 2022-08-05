import React from 'react';
import { CompleteIcon } from '../ToDoIcon/CompleteIcon';
import { DeleteIcon } from '../ToDoIcon/DeleteIcon';
import './ToDoItem.css';
   
function ToDoItem (props) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
                // className={ '' &&'Icon-svg--check'}
            
            />
            <p 
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
                
            >
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { ToDoItem };

