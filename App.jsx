import React, { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');
  const [echoData, setEchoData] = useState({});
  const [inputData, setInputData] = useState('');

  const handleGetTest = async () => {
    const response = await fetch('/test');
    const data = await response.json();
    setGreeting(data.message);
  };

  const handlePostTest = async () => {
    try {
      const response = await fetch('/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputData }),
      });
      const data = await response.json();
      setEchoData(data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <h1>TestApp</h1>

      <button onClick={handleGetTest}>Get Test Greeting</button>
      {greeting && <p>{greeting}</p>}

      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter data to echo"
        />
        <button onClick={handlePostTest}>Post Test Data</button>
      </div>
      {Object.keys(echoData).length > 0 && (
        <div>
          <h2>Echoed Data:</h2>
          <pre>{JSON.stringify(echoData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
