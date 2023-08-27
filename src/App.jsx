import Header from "./components/Header";
import Hero from "./components/Hero";
import "./assets/styles/App.css";
import Compaines from "./components/Compaines";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

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
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
