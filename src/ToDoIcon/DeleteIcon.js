import React from 'react';
import { ToDoIcon } from './index';

function DeleteIcon ({ onDelete}) {
    return (
        <ToDoIcon
        type="delete"
        onClick={onDelete}
        />
    );
};

export { DeleteIcon };