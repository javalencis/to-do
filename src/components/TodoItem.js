import './TodoItem.css'
import { BsCheckLg } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
export const TodoItem = (props) => {
  const onComplete = () => {
    alert('Ya completaste el todo ' + props.text)
  }

  const onDelete =()=>{
    alert('Borraste el todo ' + props.text)
  }

  return (
    <li className="TodoItem">
      <span 
        className={`Icon ${props.completed && 'Icon-check'}`}
        onClick={onComplete}><BsCheckLg /> </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
      <span 
        className='Icon Icon-delete'
        onClick={onDelete}><CgClose /></span>
    </li>
  )
}
