import React from "react";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem/index.js';
import { CreateToDoButton } from '../CreateToDoButton/index.js';

function AppUI ({
    completedTodos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    
    return(
        <React.Fragment>
        {/* Pasamos el estado a nuestro componente */}
        <ToDoCounter 
        total={totalToDos}
        completed={completedTodos}
        />
  
        <ToDoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        />
  
        <ToDoList>
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

        <CreateToDoButton />
      </React.Fragment>
    );
}

export { AppUI };