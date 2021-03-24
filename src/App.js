import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import "./scss/index.css";
import Home from "./components/layout/Home";
import MainSection from "./components/layout/MainSection";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Home />
          <MainSection />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
