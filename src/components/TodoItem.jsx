import React, {useState} from "react";
function TodoItem (props) {
    const [isStrike, setStrike] = useState(false);
    var strike;
    if(isStrike){
        strike = { textDecoration: "line-through" };
    }
    else{
        strike = {textDecoration: "none"};
    }
    function strikeTask() {
        setStrike((prevValue)=>{
            return !prevValue;
        });
    }
    console.log(props.text);
    return (
        <div onClick={strikeTask}>
        <li style={strike}>{props.text}</li>
        </div>

    )
}
export default TodoItem;