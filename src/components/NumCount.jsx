import {useState} from "react";
// var count = 0; 

function NumCount() {   
    const [count, setCount] = useState(0);
    function add() {
        setCount(count+1);
    }
    function subtract() {
        setCount(count-1);
    }
      return (
        <div className="card">
          <h1>{count}</h1>
          <button className="button-56" onClick={add}>+</button>
          <br />
          <button className="button-56" onClick={subtract}>-</button>
        </div>
      );
    }
    export default NumCount;