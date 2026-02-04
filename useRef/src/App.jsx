import { useRef, useState } from "react";

function App() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);
  renderCount.current += 1;

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Render count: {renderCount.current}</h3>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment count
      </button>
    </div>
  );
}

export default App;