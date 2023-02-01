import React, { Component } from "react";

import Client from "./contentfull";

const CarContext = React.createContext();

export default class CarProvider extends Component {
  state = {
    cars: [],
    sortedCars: [],
    featuredCars: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    sport: false,
    luxury: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "carRentals"
      });
      let cars = this.formatData(response.items);

      let featuredCars = cars.filter(car => car.featured === true);
      //
      let maxPrice = Math.max(...cars.map(item => item.price));
      let minPrice = Math.min(...cars.map(item => item.price));

      this.setState({
        cars,
        featuredCars,
        sortedCars: cars,
        loading: false,
        //
        price: maxPrice,
        maxPrice,
  
        minPrice
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData()

  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let car = { ...item.fields, images, id };
      return car;
    });
    return tempItems;
  }
  getCar = slug => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find(car => car.slug === slug);
    return car;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterCars
    );
  };
  filterCars = () => {
    let {
      cars,
      type,
      capacity,
      price,
      sport,
      luxury
    } = this.state;

    let tempCars = [...cars];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempCars = tempCars.filter(car => car.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempCars = tempCars.filter(car => car.capacity >= capacity);
    }
    // filter by price
    tempCars = tempCars.filter(car => car.price <= price);
 
    //filter by sport
    if (sport) {
      tempCars = tempCars.filter(car => car.sport === true);
    }
    //filter by Luxury
    if (luxury) {
      tempCars = tempCars.filter(car => car.luxury === true);
    }
    this.setState({
      sortedCars: tempCars
    });
  };
  render() {
    return (
      <CarContext.Provider
        value={{
          ...this.state,
          getCar: this.getCar,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </CarContext.Provider>
    );
  }
}
const CarConsumer = CarContext.Consumer;

export { CarProvider, CarConsumer, CarContext };

export function withCarConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CarConsumer>
        {value => <Component {...props} context={value} />}
      </CarConsumer>
    );
  };
}