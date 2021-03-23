import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./scss/index.css";
import Home from "./components/layout/Home";
import MainSection from "./components/layout/MainSection";

function App() {
  return (
    <Router>
      <div className="container">
        <Home />
        <MainSection />
      </div>
    </Router>
  );
}

export default App;
