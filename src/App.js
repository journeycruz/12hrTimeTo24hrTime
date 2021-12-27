import React from 'react';
import CurrentTime from "./Components/CurrentTime";
import Header from './Components/Header';
import "./styles/App.css";

function App() {
  return (
    <div className="bg">
      <Header />
      <CurrentTime />
    </div>
  );
}

export default App;
