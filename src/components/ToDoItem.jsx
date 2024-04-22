import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faCircleCheck, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

function ToDoItem({item, onDel, onComplete, onEdit}) {

    return ( 
        <div className='items-container'>
            <li style={{textDecoration: item.isCompleted ? 'line-through' : 'none'}}>{item.text}</li>
            <div className="button-events">
                <button onClick={() => onDel(item.id)}>
                    <span>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </button>
                <button onClick={() => onComplete(item.id)}>
                    <span><FontAwesomeIcon icon={faCircleCheck} /></span>
                </button>
                <button onClick={() => onEdit(item.id)}>
                    <span><FontAwesomeIcon icon={faPenToSquare} /></span>
                </button>
            </div>
        </div>
    )
}


export default ToDoItem;