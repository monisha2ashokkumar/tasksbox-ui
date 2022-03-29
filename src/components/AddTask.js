import TaskForm from "./TaskForm";
import axios from "axios";

export default function AddTask(props) {
  const addNewTask = (formData) => {
    axios
      .post('http://localhost:3033/api/tasks', formData)
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);
        props.addTask(responseData)
      })
      .catch((error) => {
        alert(error.message);
      });
   
  };

  return (
    <div>
      <TaskForm addTaskData={addNewTask} />
    </div>
  );
}
