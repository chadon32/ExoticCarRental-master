import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedCars from "../components/FeaturedCars";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Exotic Car rentals"
          subtitle="Drive the car you Deserve"
        >
          <Link to="/cars" className="btn-primary">
            our Cars
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedCars />
    </>
  );
};

export default home;
