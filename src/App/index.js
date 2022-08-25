import React, { useContext } from 'react'
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'

function App() {

  const { error, loading, todoList, onComplete, onDelete } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Ha ocurrido un error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !todoList.length) && <p>Crea tu primer TODO</p>}
        {todoList.map((todo, index) => {
          return (<TodoItem key={index}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />)

        })}
      </TodoList>
      <Modal>
        <p>portales</p>
      </Modal>
      <CreateTodoButton />
    </>

  );
}
export default App;
