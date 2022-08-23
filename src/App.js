import React, { useState } from 'react'
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Curso React', completed: false },
  { text: 'Curso Javascript', completed: false },
  { text: 'Estudiar Real-Time', completed: false }
]
function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let todoList=[]
  if (searchValue.length >= 1){
    todoList = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }else{
    todoList = todos
  }
 
  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {todoList.map((todo, index) => {
          return (<TodoItem key={index} text={todo.text} completed={todo.completed} />)
        })}
      </TodoList>
      <CreateTodoButton />
    </>

  );
}

export default App;
