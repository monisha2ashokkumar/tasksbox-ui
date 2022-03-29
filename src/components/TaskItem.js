import axios from "axios";
import { useState } from "react";
import EditTask from './EditTask'

export default function TaskItem(props) {
    const [toggle, setToggle] = useState(false);

  const onClickHandler = () => {
    const confirmBox = window.confirm("Are you sure you want to delete?");
    if (confirmBox) {
      axios
        .delete(`http://localhost:3033/api/tasks/${props.id}`)
        .then((response) => {
          const responseData = response.data;
          props.remove(responseData);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const onEditHandler=()=>{
    const result = !toggle;
    setToggle(result)
  }
  const onToggleHandler=(val)=>{
    setToggle(val)
  }
  const updateDataHandler=(task)=>{
    props.update(task);
  }
  return (
    <div>
        {toggle ? (<div><EditTask {...props} update={updateDataHandler} toggled={onToggleHandler}/></div>) :(<div>
            <h4>
            {props.title} {props.status}
          </h4>
          <button onClick={onEditHandler}>Edit</button>
          <button onClick={onClickHandler}>Remove</button></div>
        )}
      
    </div>
  );
}
