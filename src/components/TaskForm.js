import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm(props) {
  const [id, setId] = useState(uuidv4());
  const [taskName, setTaskName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addTaskData({id:id ,title:taskName, status:isCompleted});
    setTaskName("");
    setIsCompleted(false);
  };

  const onChangeHandler = (event) => {
    setTaskName(event.target.value);
  };

  const onClickHandler = (event) => {
    setIsCompleted(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h2>Add Task</h2>
        <div>
          <label htmlFor="taskName">Title</label>
          <input
            id="taskName"
            type="text"
            onChange={onChangeHandler}
            value={taskName}
          ></input>
        </div>
        <div>
          <input
            id="isCompleted"
            type="checkbox"
            onChange={onClickHandler}
            value={isCompleted}
            checked={isCompleted}
          ></input>
          <label htmlFor="isCompleted">Completed</label>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
