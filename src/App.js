import React from "react";
import "./App.css";

import Home from "./pages/Home";
import cars from "./pages/Cars";
import SingleCar from "./pages/SingleCar";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars/" component={cars} />
        <Route exact path="/cars/:slug" component={SingleCar} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
