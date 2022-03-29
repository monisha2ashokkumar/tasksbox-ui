import axios from "axios";
import { useState } from "react";

export default function EditTask(props) {
  const [editTitle, setEditTitle] = useState(props.title);
  const [editStatus, setEditStatus] = useState(props.status);
 
  const onChangeHandler = (event) => {
    setEditTitle(event.target.value);
  };
  const onClickHandler = (event) => {
    setEditStatus(event.target.checked);
  };

  const onSaveHandler = (event) => {
    const formData = {
      id: props.id,
      title: editTitle,
      status: editStatus,
    };
   
    // event.preventDefault()
    axios
      .put(`http://localhost:3033/api/tasks/${props.id}`, formData)
      .then((response) => {
        const responseData = response.data;
        props.update(responseData);
      })
      .catch((error) => {
        alert(error.message);
      });
    props.toggled(false);
  };
  const onCancelHandler = (event) => {
    // event.preventDefault()
    props.toggled(false);
  };
  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={editTitle}></input>
      <input
        type="checkbox"
        onChange={onClickHandler}
        checked={editStatus}
      ></input>
      <button onClick={onSaveHandler}>Save</button>
      <button onClick={onCancelHandler}>Cancel</button>
    </div>
  );
}
