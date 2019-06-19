import React from "react";
import profilepic from "./images/profile.gif";
import "./App.css";
import { About } from "./about";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

import TypingTitle from "./TypingTitle";
import NavLink from "./NavLink";

import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
  Image
} from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "HOME"
    };
  }
  render() {
    return (
      <div id="appcontainer">
        <Navbar
          bg="light"
          expand="lg"
          className="NavBar"
          style={{
            position: "fixed",
            top: "0",
            height: "50px",
            width: "100%",
            display: "flex"
          }}
        >
          <Navbar.Brand id="title">
            <a onClick={() => this.handleNavClick("HOME")}>ANDREW TSAKIRIS </a>
          </Navbar.Brand>
          <NavLink onClick={this.handleNavClick} text="ABOUT" />
          <NavLink onClick={this.handleNavClick} text="EXPERIENCE" />
          <NavLink onClick={this.handleNavClick} text="PROJECTS" />
          <NavLink onClick={this.handleNavClick} text="CONTACT" />
        </Navbar>
        {this.renderPage()}
        <div id="footer">
          <p>Updated: June 2019 </p>
        </div>
      </div>
    );
  }

  handleNavClick = text => {
    this.setState({ currentPage: text });
  };
  renderPage() {
    if (this.state.currentPage === "HOME") {
      return <Home />;
    }
    if (this.state.currentPage === "ABOUT") {
      return <AboutPage />;
    }
    if (this.state.currentPage === "CONTACT") {
      return <Contact />;
    }
    if (this.state.currentPage === "EXPERIENCE") {
      return <Experience />;
    }
    if (this.state.currentPage === "PROJECTS") {
      return <Projects />;
    }
  }
}

export default App;
