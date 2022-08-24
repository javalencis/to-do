import './CreateTodoButton.css'

export const CreateTodoButton = (props) => {

  const onClickButton =()=>{
    alert('Aqui deberia abrir el modal')
  }
  return (
    <button 
      className='CreateTodoButton'
      onClick={onClickButton}>
            +
    </button>
  )
}
