import React, { useState } from 'react';

function CommonComponent2() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Component 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CommonComponent2;
