import Top from "./components/Top";
import "./App.css"
import {useState, useEffect} from "react";
import Main from "./components/Main";

function App() {
  const [appState, setAppState] = useState("text_to_speech");
  const [runningState, setRunningState] = useState("hold");
  useEffect(() =>{
    console.log(appState);
  })
  return (
    <div className="App">
      <Top></Top>
      <Main appState={appState} runningState={runningState} setRunningState={setRunningState} setAppState={setAppState}></Main>
    </div>
  );
}

export default App;
