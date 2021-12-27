import React from 'react';
import CurrentTime from "./components/CurrentTime";
import Header from './components/Header';
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
