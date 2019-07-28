import React from "react";
import profilepic from "./images/profile.gif";
import "./App.css";
import { About } from "./about";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Involvements from "./pages/Involvements";

import TypingTitle from "./TypingTitle";
import NavLink from "./components/NavLink";

import { DropdownButton, MenuItem } from "react-bootstrap";

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
    const width = document.documentElement.clientWidth;
    return (
      <div id="appcontainer">
        {width > 700 ? this.renderDesktopHeader() : this.renderPhoneHeader()}

        {this.renderPage()}
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
    if (this.state.currentPage === "INVOLVEMENT") {
      return <Involvements />;
    }
  }

  renderPhoneHeader = () => {
    const PAGES = [
      "ANDREW TSAKIRIS",
      "ABOUT",
      "EXPERIENCE",
      "PROJECTS",
      "INVOLVEMENT",
      "CONTACT"
    ];
    return (
      <div className="NavBar">
        <div id="phoneTitle">
          <div id="phoneImgContainer">
            <img id="phoneImg" src={profilepic} />
          </div>
          <p> ANDREW TSAKIRIS </p>
        </div>
        <div id="buttonContainer">
          <DropdownButton bsStyle="primary" title="Menu">
            {PAGES.map(pageTitle => {
              return (
                <MenuItem
                  key={pageTitle}
                  onSelect={() => this.handleNavClick(pageTitle)}
                >
                  {pageTitle}
                </MenuItem>
              );
            })}
          </DropdownButton>
        </div>
      </div>
    );
  };
  renderDesktopHeader = () => {
    return (
      <div className="NavBar">
        <div id="profimgcontainer">
          <img id="profimg" src={profilepic} />
        </div>
        <NavLink
          float="left"
          onClick={this.handleNavClick}
          text="ANDREW TSAKIRIS"
        />
        <NavLink float="right" onClick={this.handleNavClick} text="CONTACT" />
        <NavLink
          float="right"
          onClick={this.handleNavClick}
          text="INVOLVEMENT"
        />

        <NavLink float="right" onClick={this.handleNavClick} text="PROJECTS" />
        <NavLink
          float="right"
          onClick={this.handleNavClick}
          text="EXPERIENCE"
        />

        <NavLink float="right" onClick={this.handleNavClick} text="ABOUT" />
      </div>
    );
  };
}

export default App;
