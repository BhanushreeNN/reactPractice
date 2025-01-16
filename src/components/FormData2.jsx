import { useState } from "react";

function FormData2() {
  const [fullname, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  function InputChanged(event) {
    const { value, name } = event.target;
    // setfullName((prevValue) => {
    //   //do not try to access event inside usestate hook
    //   if (name === "fname") {
    //     return {
    //       fname: value,
    //       lname: prevValue.lname,
    //       email: prevValue.email,
    //     };
    //   } else if (name === "lname") {
    //     return {
    //       fname: prevValue.fname,
    //       lname: value,
    //       email: prevValue.email,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fname: prevValue.fname,
    //       lname: prevValue.lname,
    //       email: value,
    //     };
    //   }
    // });
    setfullName((prevValue)=>{
      //using SPREAD operator
      return{
        ...prevValue,
        [name]: value,
      }
    })
  }

  return (
    <div className="card">
      <h1>
        Hello {fullname.fname} {fullname.lname}!
      </h1>
      <p>{fullname.email}</p>
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
        <br />
        <input
          onChange={InputChanged}
          type="text"
          placeholder=" E-mail"
          name="email"
          lvalue={fullname.email}
        />
        <button className="button-56">Submit</button>
      </form>
    </div>
  );
}
export default FormData2;

//**** SPREAD OPERATOR ****
/*
const veg = ["tomato", "potato"];
const groceries = ["pulses", "fruits", ...veg]
console.log(groceries);
//output: ["pulses", "fruits", "tomato", "potato"]

const fullname = {
fname: "james",
lname: "bond",
};
const user = {
...fullname,
id: 1,
username: "james123",
}
console.log(user);
//output: {
fname: "james",
lname: "bond",
id: 1,
username: "james123",
}
*/
