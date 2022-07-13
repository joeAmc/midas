import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home";
import RingsPage from "./pages/Rings";
import EarringsPage from "./pages/Earrings";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/rings">
          <RingsPage />
        </Route>
        <Route path="/earrings">
          <EarringsPage />
        </Route>
      </Switch>
      <h1>Midas Touch</h1>
    </div>
  );
}

export default App;
