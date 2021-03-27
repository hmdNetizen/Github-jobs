import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./scss/index.css";
import Home from "./components/layout/Home";
import JobDetails from "./components/layout/JobDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container__wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:jobId">
              <JobDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
