import "./styles/App.css";
import CurrentTime from "./components/CurrentTime";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg">
      <Header />
      <CurrentTime />
    </div>
  );
}

export default App;
