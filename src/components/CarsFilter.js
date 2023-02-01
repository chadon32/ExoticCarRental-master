import React from "react";
import { useContext } from "react";
import { CarContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const CarsFilter = ({ cars }) => {
  // react hooks
  const context = useContext(CarContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    sport,
    luxury
  } = context;

  // get unique types
  let types = getUnique(cars, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(cars, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search cars" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Car type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* occupancy  */}
        <div className="form-group">
          <label htmlFor="capacity">Occupancy</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of occupancy */}
        {/* Car price */}
        <div className="form-group">
          <label htmlFor="price">Car price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of Car price*/}
       
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="sport"
              id="sport"
              checked={sport}
              onChange={handleChange}
            />
            <label htmlFor="sport">sport</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="luxury"
              checked={luxury}
              onChange={handleChange}
            />
            <label htmlFor="luxury">luxury</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default CarsFilter;
