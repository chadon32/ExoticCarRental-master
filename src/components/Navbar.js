import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/dted.png";



export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleOutsideClick = (event) => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    const navBtn = document.querySelector(".nav-btn");

    if (!navbar.contains(event.target)) {
      navLinks.classList.remove("show-nav");
      navBtn.classList.remove("open");
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Car Gallery" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/Policies">Policies</Link>
            </li>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="contact">Contact Me</Link>
            </li>
            <li>
              <Link to="Calender">Calender</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

