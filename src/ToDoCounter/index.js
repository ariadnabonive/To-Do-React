import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';

// Desestructuramos los props que pasamos al componente
function ToDoCounter() {
    const {totalToDos, completedTodos} = React.useContext(ToDoContext);

    return (
        <h2 className='ToDoCounter'>Tienes {completedTodos} de {totalToDos} TO DO completados.</h2>
    );
}

export { ToDoCounter };