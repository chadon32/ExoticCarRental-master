import React, { Component } from "react";
import defaultBcg from "../images/exoticcar3.jpg";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { CarContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = CarContext;

  render() {
    const { getCar } = this.context;
    const car = getCar(this.state.slug);

    if (!car) {
      return (
        <div className="error">
          <h3> no such car could be found...</h3>
          <Link to="/cars" className="btn-primary">
            back to cars
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      price,
      extras,
      sport,
      luxury,
      images
    } = car;
    const [, ...defaultImages] = images;
  

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/cars" className="btn-primary">
              back to cars
            </Link>
          </Banner>
        </StyledHero>
        <section >
          <div className="single-car-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-car-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>monthly price : ${price}</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{luxury ? "Premium luxury" : "Default"}</h6>
              <h6>{sport && "Sports Car "}</h6>
            </article>
          </div>
          
        </section>
        <section className="car-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
     
      </>
    );
  }
}
