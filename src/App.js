import "./App.css";
import Strike from "./components/Strike";
import NumCount from "./components/NumCount";
import GetTime from "./components/GetTime";
import FormData1 from "./components/FormData1";
import FormData2 from "./components/FormData2"

function App() {
  return (
    <div className="App">
      <h1>My React Practice📝</h1>
      <div><Strike /></div>
      <div><NumCount /></div>
      <div><GetTime /></div>
      <div><FormData1 /></div>
      <div><FormData2 /></div>
    </div>
  );
}

export default App;
