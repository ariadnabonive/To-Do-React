import React from 'react';
import './ToDoCounter.css';

// Desestructuramos los props que pasamos al componente
function ToDoCounter({total, completed}) {
    return (
        <h2 className='ToDoCounter'>Has completado {completed} de {total} TO DOs</h2>
    );
}

export { ToDoCounter };