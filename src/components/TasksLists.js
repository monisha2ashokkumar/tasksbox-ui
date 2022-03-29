import TaskItem from "./TaskItem";

export default function TasksLists(props) {
  //console.log(props.lists.length)
  const removeHandler = (taskData) => {
    props.remove(taskData);
  };
  const updateHandler = (taskData) => {
    props.update(taskData);
  };
  return (
    <div>
      {props.lists.length === 0 ? (
        <div>
          <h2>No tasks found</h2>
          <h2>Add your first task</h2>
        </div>
      ) : (
        <div>
          <h2>Total tasks - {props.lists.length}</h2>
          <ul>
            {props.lists.map((task) => {
              return (
                <li key={task.id}>
                  <TaskItem
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    remove={removeHandler} update={updateHandler}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
