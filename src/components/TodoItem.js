import './TodoItem.css'
import {BsCheckLg} from 'react-icons/bs'
import {CgClose} from 'react-icons/cg'
export const TodoItem = (props) => {
  return (
    <li className="TodoItem">
        <span className={`Icon ${props.completed && 'Icon-check'}`}><BsCheckLg/> </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
        <span className='Icon Icon-delete'><CgClose/></span>
    </li>
  )
}
