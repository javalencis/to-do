import React, { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const TodoContext = createContext();

export function TodoProvider(props) {
    const { item: todos, saveItems: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

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
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            setSearchValue,
            todoList,
            onComplete,
            onDelete
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

