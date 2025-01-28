import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flexRow">
      <div className="left">
        <h1>left</h1>
      </div>
      <div className="right">
        <h1>right</h1>
      </div>
    </div>
  );
}

export default App;
