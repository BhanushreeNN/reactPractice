function StrikeElement() {
    document.getElementById("sample").style.textDecoration = "line-through";
}
function UnStrikeElement() {
    document.getElementById("sample").style.textDecoration = null;
}
function Strike() {
//   var isStrike = false;
//   var strike = { textDecoration: "line-through" };

  return (
    <div className="card">
      {/* <h1 style={isStrike ? strike : null}>Sample Text!!! </h1> */}
      <h1 id="sample">Sample Text!!! </h1>
      <button className="button-56" onClick={StrikeElement}>--Strike--</button>
      <br />
      <button className="button-56" onClick={UnStrikeElement}>UnStrike</button>
    </div>
  );
}
export default Strike;