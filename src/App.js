import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";

import "./App.css";
import StockDetail from "./pages/StockDetail";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/stocks">
          <Stocks />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(props) => <StockDetail {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
