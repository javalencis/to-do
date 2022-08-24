import './TodoItem.css'
import { BsCheckLg } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
export const TodoItem = ({todos,todo,setTodos}) => {
  const onComplete = () => {
    const indexText = todos.findIndex(t  => t.text === todo.text)
    const newArray = [...todos]
    newArray[indexText].completed = true;
    setTodos(newArray)

  }

  const onDelete =()=>{
    const indexText = todos.findIndex(t  => t.text === todo.text)
    const newArray = [...todos]
    newArray.splice(indexText,1);
    setTodos(newArray)
  
  }

  return (
    <li className="TodoItem">
      <span 
        className={`Icon ${todo.completed && 'Icon-check'}`}
        onClick={onComplete}><BsCheckLg /> </span>
      <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--completed'}`}>{todo.text}</p>
      <span 
        className='Icon Icon-delete'
        onClick={onDelete}><CgClose /></span>
    </li>
  )
}
