import react, { useState } from "react";

function FormData1() {
  const [name, setName] = useState();
  const [nameclick, setNameClicked] = useState();
  var inputName;
  function inputChanged(event) {
    // console.log(event.target.value);
    inputName = event.target.value;
    setName(inputName);
  }

  function ButtonClicked() {
    console.log(name);
    setNameClicked(name);
  }
  return (
    <div className="card">
      <p>dynamic</p>
      <h1>Hello {name}!</h1>
      <p>on click</p>
      <h1>Hello {nameclick}!</h1>
      <div>
        <input
          onChange={inputChanged}
          type="text"
          placeholder=" What's your name?"
          value={name}
        />
        <button onClick={ButtonClicked} className="button-56">Submit</button>
      </div>
    </div>
  );
}
export default FormData1;
