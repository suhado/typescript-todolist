import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";

function App() {
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <span className="heading">Suha</span>
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
