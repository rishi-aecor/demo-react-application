import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <p>This is a React app running on AWS ECS</p>
        <p>Deployed via Docker and ECR</p>
      </header>
    </div>
  );
}

export default App;