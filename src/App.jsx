import Header from "./components/Header";
import Hero from "./components/Hero";
import "./assets/styles/App.css";
import Compaines from "./components/Compaines";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";

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
      <Value />
      <Contact />
    </div>
  );
}

export default App;
