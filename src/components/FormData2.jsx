import react, { useState } from "react";

function FormData2() {
  const [fullname, setfullName] = useState({
    fname: "",
    lname: "",
  });
  var firstInputName, lastInputName;

  function InputChanged(event) {
    const { value, name } = event.target;
    setfullName((prevValue) => {
      //do not try to access event inside usestate hook
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="card">
      <h1>
        Hello {fullname.fname} {fullname.lname}!
      </h1>
      <form>
        <input
          onChange={InputChanged}
          type="text"
          placeholder=" First name"
          name="fname"
          fvalue={fullname.fname}
        />
        <br />
        <input
          onChange={InputChanged}
          type="text"
          placeholder=" Last name"
          name="lname"
          lvalue={fullname.lname}
        />
        <button className="button-56">Submit</button>
      </form>
    </div>
  );
}
export default FormData2;
