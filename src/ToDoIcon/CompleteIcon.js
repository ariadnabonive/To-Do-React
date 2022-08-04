import React from 'react';
import { ToDoIcon } from './index';

function CompleteIcon ({ completed, onComplete}) {
    return (
        <ToDoIcon
        type="check"
        color={completed ? '#4caf50' : '#503459'}
        onClick={onComplete}
        />
    );
};                                                                       

export { CompleteIcon };