import React from 'react';
//Importamos nuestro contexto
import { ToDoContext } from '../ToDoContext';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';

function AppUI () {  
    return(
        <React.Fragment>
        {/* Pasamos el estado a nuestro componente */}
        <ToDoCounter />
        <ToDoSearch />
  
        {/* Podemos acceder a nuestro contexto con el consumer */}
        <ToDoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <ToDoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <ToDoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </ToDoList>
        )}
      </ToDoContext.Consumer>

        <CreateToDoButton />
      </React.Fragment>
    );
}

export { AppUI };