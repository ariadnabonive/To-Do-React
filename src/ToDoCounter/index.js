import React from 'react';
import './ToDoCounter.css';

// Desestructuramos los props que pasamos al componente
function ToDoCounter({totalToDos, completedTodos}) {

    return (
        <h2 className='ToDoCounter'>Tienes {completedTodos} de {totalToDos} TO DO completados.</h2>
    );
}

export { ToDoCounter };