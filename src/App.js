import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <p
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Hello {count}
    </p>
  );
}

export default App;
