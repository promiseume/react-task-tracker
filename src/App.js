import Header from './Component/Header'
import Task from './Component/Task'
import { useState } from 'react'
import AddTask from './Component/AddTask'

function App() {
  const[tasks, setTasks]= useState([
    
])

//add task


const addTask =(task) =>{
     const id = Math.floor(Math.random() * 10000) +1
     const newTask = {id,...task}
     setTasks([...tasks, newTask])
}

//delete task
const deleteTask= (id) =>{
   setTasks(tasks.filter((tasks)=> tasks.id !== id))
}


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?<Task tasks={tasks} onDelete={deleteTask}/> : "Add a task"}
    </div>
  );
}

export default App;
