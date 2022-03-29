import { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import TasksLists from "./TasksLists";

export default function HomePage(props) {
  const [tasksLists, setTasksLists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const responseData = response.data;
        setTasksLists(responseData);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const addNewTask = (formData) => {
    setTasksLists((prevTasksLists) => {
      return [formData, ...prevTasksLists];
    });
  };

  const removeTask = (removeTask) => {
    const updatedTasksLists = tasksLists.filter(
      (task) => task.id !== removeTask.id
    );
    setTasksLists(updatedTasksLists);
  };

  const updateTask = (data) => {
    const result = tasksLists.map((task) =>
      task.id === data.id ? data : task
    );
    setTasksLists(result);
  };

  return (
    <div>
      <div>
        <TasksLists
          lists={tasksLists}
          remove={removeTask}
          update={updateTask}
        />
      </div>
      <div>
        <AddTask addTask={addNewTask} />
      </div>
    </div>
  );
}
