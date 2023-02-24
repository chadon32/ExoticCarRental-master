import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedCars from "../components/FeaturedCars";
import SocialFollow from "../components/SocialFollow";


const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="DogeCoin Exotics"
          subtitle="Drive the car you Deserve"
        >
          <Link to="/cars" className="btn-primary">
            our Cars
          </Link>
          
        </Banner>
      </Hero>
      <Services />
      <FeaturedCars />
      <SocialFollow />
    </>
  );
};

export default home;
