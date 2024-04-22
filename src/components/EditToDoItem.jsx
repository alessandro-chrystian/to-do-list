import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

function EditToDoItem({onAddEditItem, item, id}) {
    
    const [editItem, setEditItem] = useState(item.text)

    function handleEditItem(event) {
        setEditItem(event.target.value)
    }

    return (
        <div className="form">
            <form onSubmit={(e) => {
                e.preventDefault();
                onAddEditItem(editItem, id)
                }}>
                <input value={editItem} onChange={handleEditItem} />
                    <button type="submit">
                        <span><FontAwesomeIcon icon={faPenToSquare} /></span>
                    </button>
            </form>
    </div>
    )
}

export default EditToDoItem;