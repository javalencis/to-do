import React, { useState } from 'react'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';

function useLocalStorage(itemName,initialValue) {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItems = (newItems) => {
    const stringifiedItems = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedItems);
    setItem(newItems)
  }
  return [item, saveItems]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[])


  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let todoList = []
  if (searchValue.length >= 1) {
    todoList = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  } else {
    todoList = todos
  }
  const onComplete = (text) => {
    const indexText = todos.findIndex(t => t.text === text)
    const newArray = [...todos]
    newArray[indexText].completed = true;
    saveTodos(newArray)

  }

  const onDelete = (text) => {
    const indexText = todos.findIndex(t => t.text === text)
    const newArray = [...todos]
    newArray.splice(indexText, 1);
    saveTodos(newArray)

  }


  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch setSearchValue={setSearchValue} />
      <TodoList>
        {todoList.map((todo, index) => {
          return (<TodoItem key={index}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />)
        })}
      </TodoList>
      <CreateTodoButton />
    </>

  );
}

export default App;
