import './TodoItem.css'
import { BsCheckLg } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
export const TodoItem = ({todo,onComplete,onDelete}) => {
 
 

  return (
    <li className="TodoItem">
      <span 
        className={`Icon ${todo.completed && 'Icon-check'}`}
        onClick={()=>onComplete(todo.text)}><BsCheckLg /> </span>
      <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--completed'}`}>{todo.text}</p>
      <span 
        className='Icon Icon-delete'
        onClick={()=>onDelete(todo.text)}><CgClose /></span>
    </li>
  )
}
