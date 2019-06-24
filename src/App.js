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
import NavLink from "./components/NavLink";

//TODO: make top nav bar into a grid, make ANDREW TSAKIRIS have a pressable cursor.
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
        <div className="NavBar">
          <NavLink onClick={this.handleNavClick} text="ANDREW TSAKIRIS" />
          <NavLink onClick={this.handleNavClick} text="ABOUT" />
          <NavLink onClick={this.handleNavClick} text="EXPERIENCE" />
          <NavLink onClick={this.handleNavClick} text="PROJECTS" />
          <NavLink onClick={this.handleNavClick} text="CONTACT" />
        </div>
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
    if (
      this.state.currentPage === "HOME" ||
      this.state.currentPage === "ANDREW TSAKIRIS"
    ) {
      return <Home onClick={this.handleNavClick} />;
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
