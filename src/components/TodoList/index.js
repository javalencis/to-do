import './TodoList.css'
export const TodoList = (props) => {
  return (
    <section className='TodoList'> 
        <ul>
            {props.children}
        </ul>
    </section>
  )
}
