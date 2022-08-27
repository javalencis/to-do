import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './CreateTodoButton.css'

export const CreateTodoButton = () => {
 
  const {openModal,setOpenModal} = useContext(TodoContext)
  const onClickButton =()=>{
    setOpenModal(!openModal)
  }
  return (
    <button 
      className='CreateTodoButton'
      onClick={onClickButton}>
            +
    </button>
  )
}
