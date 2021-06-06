import { FaRegCheckSquare, FaTimes } from 'react-icons/fa'

//add a icon from fontawesome that removes the item when clicked on
const Tasks = ({task,onDelete}) => {

    return (
        <div className='task'>
            <h3>{task.text} <div className="faDiv"> <FaRegCheckSquare/><FaTimes style={{color:"red",cursor:"pointer"}} onClick={() => onDelete(task.id)} /> </div></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Tasks
