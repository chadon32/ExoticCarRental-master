import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/exoticcar3.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
const Car = memo(({ car }) => {
  const { name, slug, images, price } = car;

  return (
    <article className="vehicle">
      <div className="img-container">
        <img src={images[0] || defaultImg}  className= "single-car"   alt="single car" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per Day</p>
        </div>
        <Link to={`/Cars/${slug}`} className="btn-primary Car-link">
          features
        </Link>
      </div>
      <p className="Car-info">{name}</p>
    </article>
  );
});

Car.propTypes = {
  Car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Car;
