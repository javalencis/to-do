import { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoForm.css'
export const TodoForm = () => {

    const {addTodo,setOpenModal} =  useContext(TodoContext)

    const [vacio,setVacio] = useState(false)

    const onClickCancelar = ()=>{
        setOpenModal(false)
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()
        const textTarea = e.target['tarea'].value;
        if (textTarea !== ''){
            addTodo(textTarea)
            setOpenModal(false)
        }else{
            setVacio(true)
        }
        
        
    }
    return (
        <div className="TodoForm">
            <form onSubmit={handleOnSubmit}>
                {vacio && <p className='textAdvertencia'>Lleno todos los campos</p>}
                <textarea name="tarea" placeholder='Escribe tu tarea'>
                </textarea>
                <div>
                    <button type="button" className='Button-cancelar'
                            onClick={onClickCancelar}>
                        Cancelar
                    </button>
                    <button type="submit" className='Button-anadir'>
                        Añadir
                    </button>
                </div>

            </form>
        </div>

    )
}