import React, {useState} from 'react';

const ToDoForm = (props) => {
    const [toDo, setToDo] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        const allToDos = {toDo, complete: false}
        props.newToDo (allToDos)
        setToDo("")
    }
    const updateList = (e) =>{
        setToDo(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>To do list:</label>
                <input type='text' name='toDo' onChange={updateList} value={toDo} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default ToDoForm