import React from 'react'
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

function App() {
  const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Curso React', completed: false },
    { text: 'Curso Javascript', completed: false }
  ]
  return (
    <>    
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map((todo,index) => {
            return (<TodoItem key={index} text={todo.text}/>)
          })}
      </TodoList>
      <CreateTodoButton/>
    </>

  );
}

export default App;
