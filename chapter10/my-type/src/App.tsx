import React, { useState } from "react";
import "./App.css";

type AppProps = {
  item: string;
};

function App({ item }: AppProps) {
  const [fabricColor, setFabricColor] = useState("purple");
  return (
    <div className="App">
      <h1>
        {fabricColor} {item}
      </h1>
      <button onClick={() => setFabricColor("blue")}>
        Make the Jacket Blue
      </button>
    </div>
  );
}

export default App;
