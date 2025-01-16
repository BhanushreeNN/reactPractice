import React, { useState } from "react";

function CreateArea(prop) {
    const [note, setnote] = useState({
        title:"",
        content:"",
    });
    function Changed(event) {
        const {name, value} = event.target;
        setnote((prevValue)=>{
            return ({
                ...prevValue,
                [name]: value,
            });
        });

    }
    function submitNote(event){
        prop.onadd(note);
        setnote({
            title:"",
            content:"",
        });
        event.preventDefault();

    }
  return (
    <div>
      <form className="keeperform">
        <input name="title" value={note.title} placeholder="Title" onChange={Changed} />
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3"  onChange={Changed}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
