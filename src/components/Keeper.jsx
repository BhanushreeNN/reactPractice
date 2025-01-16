import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../KeeperStyles.css";
import { Link } from "react-router-dom";
function Keeper() {
  const [NoteList, setList] = useState([]);
  function addNote(note) {
    console.log(note);
    setList((prevList) => {
      return [...prevList, note];
    });
  }
  function deletenote(id) {
    setList((prevList)=>{
      return prevList.filter((noteitem, index)=>
      {
        return index!==id;
      })
    })
  }
  return (
    <div className="keeper">
      <div className="keeperbody">
        <Header />
        <CreateArea onadd={addNote} />
        {NoteList.map((item, index) => <Note key ={index}  id ={index} title={item.title} content={item.content}  ondelete = {deletenote}/>)}
        <Footer/>
      </div>
    </div>
  );
}

function KeeperComponent() {
  return (
    <div className="card">
      <h1 id="sample">Keeper App </h1>
      <Link to="/keeper">
        <button className="button-56">Click here to go!</button>
      </Link>
    </div>
  );
}

export { Keeper, KeeperComponent };
