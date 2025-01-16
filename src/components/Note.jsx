import React from "react";

function Note(props) {
  function deleteButtonClicked() {
    props.ondelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteButtonClicked}>DELETE</button>
    </div>
  );
}

export default Note;
