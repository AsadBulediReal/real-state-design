import Header from "./components/Header";
import Hero from "./components/Hero";
import "./assets/styles/App.css";
import Compaines from "./components/Compaines";
import Residencies from "./components/Residencies";
function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Compaines />
      <Residencies />
    </div>
  );
}

export default App;
