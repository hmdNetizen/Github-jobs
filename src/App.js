import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./scss/index.css";
import Home from "./components/layout/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container__wrapper">
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
