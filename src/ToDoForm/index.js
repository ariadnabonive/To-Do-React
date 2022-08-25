import React from 'react';
import './ToDoForm.css';

function ToDoForm({addTodo,setOpenModal}) {
    // Creamos un estado para nuestro nuevo TODO
    const [newToDoValue, setNewToDoValue] = React.useState('');

    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };
    // Función para cerrar el modal
    const onCancel = () => {
        setOpenModal(false);
    };
    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addTodo(newToDoValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewToDoValue('');
    };

    return (
       <form onSubmit= {onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder='Escribe aquí tu nueva tarea'
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                > 
                    Cancelar
                </button>
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                    onClick={onSubmit}
                >
                    Añadir
                </button>
            </div>
       </form> 
    )
};

export { ToDoForm };