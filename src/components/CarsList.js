import React from "react";
import Car from "./Car";
const CarsList = ({ cars }) => {
  if (cars.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no Cars matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="Carslist">
      <div className="Carslist-center">
        {cars.map(item => {
          return <Car key={item.id} car={item} />;
        })}
      </div>
    </section>
  );
};

export default CarsList;
