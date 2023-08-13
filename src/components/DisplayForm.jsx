import React from 'react';

const DisplayForm = (props) => {
    const deleteTask = (Idx) =>{
        props.deleteTask(Idx)
    }
    const completeTask = (Idx, complete) =>{
        props.completeTask(Idx, complete)
    }
    
    return (
        <div>
            {props.nextToDo.map((oneTask, Idx)=>{
                return(
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    {oneTask.complete?<p style={{textDecoration:'line-through'}}>{oneTask.toDo}</p>:<p>{oneTask.toDo}</p>}
                    <p></p>
                    <input type="checkbox" checked ={oneTask.complete} onChange={(e)=>completeTask(Idx,e.target.checked)} />
                    <button onClick={()=>deleteTask(Idx)}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayForm