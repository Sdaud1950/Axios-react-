import Api from "./Api";
import "./App.css";
function App() {


  // const EventHANDEl = () => {
  //  console.log ("you have cliked me")
  // };

  // const handercahnge = (e) => {
  //   console.log(e.target.value, "enter value");
  // };

  return (
    <div className="App">
      {/* <div className="Evnts">
        <button onClick={EventHANDEl}>Click me</button> <br></br>
        <input
          type="text "
          onChange={(e) => {
            handercahnge(e);
          }}
        ></input>
      </div> */}

      <Api/>
    </div>
  );
}

export default App;
