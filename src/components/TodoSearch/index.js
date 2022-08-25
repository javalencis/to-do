
import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoSearch.css'
export const TodoSearch = () => {

  const {setSearchValue} = useContext(TodoContext)
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  return (

    <div className='TodoSearch'>
      <input onChange={onChangeSearch} 
             placeholder="Buscar tarea" 
            />
    </div>

  )
}
