import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import "./scss/index.css";
import Home from "./components/layout/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
