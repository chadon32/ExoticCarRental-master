import React from "react";
import "./App.css";

import Home from "./pages/Home";
import cars from "./pages/Cars";
import SingleCar from "./pages/SingleCar";
import Error from "./pages/Error";
import Policy from "./pages/Policy";
import Calender from "./pages/Calender";

import Navbar from "./components/Navbar";
import Contact from "./pages/contact"
import { Switch, Route } from "react-router-dom";



function App() {

 
  return (
    <>
  
 
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars/" component={cars} />
        <Route exact path="/Policies/" component={Policy} />
        <Route exact path="/cars/:slug" component={SingleCar} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Calender" component={Calender} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
