import logo from "./logo.svg";
import { Typography } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./component/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h1">Always visible</Typography>
        <BrowserRouter>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </BrowserRouter>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
