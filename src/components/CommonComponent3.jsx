import React, { useState, useEffect } from 'react';

function CommonComponent3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <h2>Component 3</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommonComponent3;
