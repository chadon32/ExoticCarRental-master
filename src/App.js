import React from "react";
import "./App.css";

import Home from "./pages/Home";
import cars from "./pages/Cars";
import SingleCar from "./pages/SingleCar";
import Error from "./pages/Error";
import Policy from "./pages/Policy";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";



import Zendesk, { ZendeskAPI } from "./ZendexConfig";


const ZENDESK_KEY = "051e0bda-3602-4020-adc3-5bad9ae1bbcf";



function App() {

  const handleLoaded = () => {
    ZendeskAPI("messenger", "closed");
  };
  return (
    <>
  
    <div>
      <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
    </div>
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
