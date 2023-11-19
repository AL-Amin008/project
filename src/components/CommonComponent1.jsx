import React, { useRef, useEffect } from 'react';
import '/'
function CommonComponent1() {
  const myRef = useRef();

  useEffect(() => {
    // Access the DOM element using myRef.current
    myRef.current.style.backgroundColor = 'lightgray';
  }, []);

  return (
    <div ref={myRef} className="component1">
      <h2>Component 1</h2>
      <p>Using useRef to change background color</p>
    </div>
  );
}

export default CommonComponent1;
