import { useState } from 'react'
import './TodoSearch.css'
export const TodoSearch = ({searchValue, setSearchValue}) => {

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
