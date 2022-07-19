import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home";
import RingsPage from "./pages/Rings";
import EarringsPage from "./pages/Earrings";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
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
      <Footer />
    </>
  );
};

export default App;
