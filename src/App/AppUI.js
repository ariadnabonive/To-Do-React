import React from 'react';
//Importamos nuestro contexto
import { ToDoContext } from '../ToDoContext';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDoForm } from '../ToDoForm';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDosError } from '../ToDosError';
import { ToDosLoading } from '../ToDosLoading';
import { EmptyToDos } from '../EmptyToDos';


function AppUI () {  
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(ToDoContext);

    return(
        <React.Fragment>
          <ToDoCounter />
          <ToDoSearch />
        
          <ToDoList>
            {error && <ToDosError />}
            {loading && <ToDosLoading /> }
            {(!loading && !searchedTodos.length) && <EmptyToDos />}
            
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

          {!!openModal && (
            <Modal>
              <ToDoForm/>
            </Modal>
          )}
  
          <CreateToDoButton
            setOpenModal = {setOpenModal} 
          />
        </React.Fragment>
    );
}

export { AppUI };