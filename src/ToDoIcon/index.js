import React from 'react';
import './ToDoIcon.css';
import { BsTrash } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

const iconTypes = {
    "check" : color => (
        <BsCheckCircle className='Icon-svg Icon-svg--check' fill={color} />
    ),
    "delete" : color => (
        <BsTrash className='Icon-svg Icon-svg--delete' fill={color}/>
    ),
};


const ToDoIcon = ({ type, color='black', onClick }) => {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
           {iconTypes[type](color)}     
        </span>       
    );
  }


export { ToDoIcon };