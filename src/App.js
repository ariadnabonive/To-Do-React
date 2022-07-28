import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
//import './App.css';

const defaultToDos = [
  { text: 'Tomar agua', completed: true },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Tomar el curso de React', completed: true },
  { text: 'Comer frutas', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  //Estado inicial de nuestros ToDos
  const [toDos, setToDos] = React.useState(defaultToDos);
  //Cantidad de ToDos completados
  const completedToDos = toDos.filter(todo => !!todo.completed).length;
  //Cantidad total de ToDos 
  const totalToDos = toDos.length;

  return (
    <React.Fragment>
      {/* Pasamos el estado a nuestro componente */}
      <ToDoCounter 
      completed = {completedToDos}
      total = {totalToDos}
      />

      <ToDoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <ToDoList>
        {toDos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;