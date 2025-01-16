import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../toDoStyles.css";
import TodoItem from "./TodoItem";
function ToDo() {
  const [TextContent, setTextContent] = useState("");
  const [ListOfTask, setListoftask] = useState([]);
  function recordInput(event) {
    const { value, name } = event.target;
    // console.log(value);
    setTextContent(value);
  }

  function AddToList() {
    setListoftask((prevList) => {
      return [...prevList, TextContent];
    });
    setTextContent("");
    // console.log(ListOfTask);
  }
  return (
    <div className="listbody">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input name="inputText" type="text" onChange={recordInput} />
          <button onClick={AddToList}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {/* {ListOfTask.map(function (task, index) {
              return <li key={index}>{task}</li>;
            })} */}
            {ListOfTask.map(todoitem => <TodoItem text={todoitem}/>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
function ToDoComponent() {
  return (
    <div className="card">
      <h1 id="sample">To Do List </h1>
      <Link to="/todo">
        <button className="button-56">Click here to go!</button>
      </Link>
    </div>
  );
}

export { ToDo, ToDoComponent };
