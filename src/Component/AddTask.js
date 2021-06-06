import { useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay]  = useState('')

        const onSubmit =(e) =>{
            e.preventDefault()
            onAdd({text,day })
            setText('')
            setDay('')
        }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>
                    Task
                </label>
                <input type='text' placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>
                    Day
                </label>
                <input type='text' placeholder='Add Day' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <input type='submit' value='save' className="btn btn-block"/>
        </form>
    )
}

export default AddTask
