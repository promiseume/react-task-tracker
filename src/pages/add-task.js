import { useState } from "react";
import Tasks from "../Component/Tasks";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10000) + 1;

    // add a new task
    const newTask = { id, day, text };
    setTasks([...tasks, newTask]);

    // clear state after adding task
    setText("");
    setDay("");
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day</label>
          <input
            type="text"
            placeholder="Add Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <input type="submit" value="save" className="btn btn-block" />
      </form>

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "Add a task"
      )}
    </div>
  );
};

export default AddTask;
