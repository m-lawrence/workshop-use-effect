import { useState, useEffect } from "react";

function App() {
  // ✅ update the initial state for text to read a value using localStorage.getItem("text")
  const [text, setText] = useState(localStorage.getItem("text"));
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("text", text)
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    console.log("Running side effect");
  }, [text]);
  // ✅ use the dependencies array so that the side effect only runs if the text changes

  console.log("Rendering component");

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
