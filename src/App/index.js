import React from 'react';
import { useToDos } from './useToDos';
import { ToDoHeader } from '../ToDoHeader';
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

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalToDos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useToDos();

  return (
    <>
      <ToDoHeader>
        <ToDoCounter
          totalToDos={totalToDos}
          completedTodos={completedTodos}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </ToDoHeader>

      <ToDoList>
        {error && <ToDosError />}
        {loading && <ToDosLoading />}
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
          <ToDoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateToDoButton
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default App;