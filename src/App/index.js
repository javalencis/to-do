import React, { useState } from 'react'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';

function App() {




  const [todos, setTodos] = useState([]);
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
      <TodoSearch setSearchValue={setSearchValue} />
      <TodoList>
        {todoList.map((todo, index) => {
          return (<TodoItem key={index} todos ={todos} todo={todo} setTodos={setTodos}/>)
        })}
      </TodoList>
      <CreateTodoButton />
    </>

  );
}

export default App;
