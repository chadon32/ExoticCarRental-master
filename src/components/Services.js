import React, { Component } from "react";
import {FaCar, FaShuttleVan, FaBitcoin} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
     
      {
        icon: <FaCar />,
        title: "Beautiful Customized Cars",
        info:
          "You wont find these Cars anywhere else"
      },
      {
        icon: <FaShuttleVan />,
        title: "Delivery Avalible",
        info:
          "We can Deliver within a certain range"
      },
      {
        icon: <FaBitcoin />,
        title: "Dogecoin/Bitcoin",
        info:
          "Were the only company that accepts Dogecoin as another payment"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
