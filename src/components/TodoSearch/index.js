
import './TodoSearch.css'
export const TodoSearch = ({setSearchValue}) => {

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
