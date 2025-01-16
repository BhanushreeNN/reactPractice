import {useState} from "react";

function GetTime() {   
    const [time, setTime] = useState("TIME");

    // FOR CONTINUOUS UPDATE
    // function sayHi() {
    //     console.log("Hi");
    // }
    // setInterval(sayHi, 1000); //1s

    function timesNow() {
        let now = new Date().toLocaleTimeString();
        // console.log(now);
        setTime(now);
    }
    
      return (
        <div className="card">
          <h1>{time}</h1>
          <button className="button-56" onClick={timesNow}>Click me to Get Time</button>
        </div>
      );
    }
    export default GetTime;