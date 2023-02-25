import React from "react";
import "./App.css";

import Home from "./pages/Home";
import cars from "./pages/Cars";
import SingleCar from "./pages/SingleCar";
import Error from "./pages/Error";
import Policy from "./pages/Policy";
import ChatWidget from "./papercups";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";



function App() {

 
  return (
    <>
  
  < ChatWidget />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars/" component={cars} />
        <Route exact path="/Policies/" component={Policy} />
        <Route exact path="/cars/:slug" component={SingleCar} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
