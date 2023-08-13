import './App.css';
import React, {useState} from 'react';
import DisplayForm from './components/DisplayForm';
import ToDoForm from './components/ToDoForm';

function App() {
    const [nextToDo, setNext] = useState([])
    const addToList = (task) =>{
      setNext([...nextToDo, task])
    }
    const deleteTask = (delIdx) =>{
      const removeTask = nextToDo.filter((oneTask, Idx)=> Idx !== delIdx)
      setNext(removeTask)
    }
    const completeTask = (completeIdx, isChecked)=>{
      const newTask = nextToDo.map((oneTask, Idx)=>{
        if (completeIdx === Idx){
          return {...oneTask, complete:isChecked};
        }
        else{
          return oneTask;
        }
      })
      setNext(newTask)
    }

  return (
    <div className="App">
      <ToDoForm newToDo={addToList}/>
      <DisplayForm nextToDo={nextToDo} deleteTask={deleteTask} completeTask={completeTask}/>
    </div>
  );
}

export default App;