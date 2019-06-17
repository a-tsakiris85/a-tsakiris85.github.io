import React from "react";
import logo from "./logo.svg";
import profilepic from "./profile.gif";
import "./App.css";
import { About } from "./about.js";

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
            width: "100%",
            display: "flex"
          }}
        >
          <Navbar.Brand id="title">ANDREW TSAKIRIS</Navbar.Brand>
          <NavLink href="#home" text="ABOUT" />
          <NavLink href="#home" text="EXPERIENCE" />
          <NavLink href="#home" text="PROJECTS" />
          <NavLink href="#home" text="CONTACT" />
        </Navbar>
        <div
          id="typingtitle"
          style={{
            display: "grid",
            gridTemplateColumn: "20% 80%",
            gridTemplateRow: "100px auto",
            marginTop: "110px"
          }}
        >
          <div
            id="profilecontainer"
            style={{
              float: "left",
              maxWidth: "275px",
              height: "275px",
              gridColumn: "1",
              gridRow: "1 / span 2"
            }}
          >
            <Image
              src={profilepic}
              fluid
              style={{ width: "275px", height: "275px" }}
            />
          </div>

          <TypingTitle />
          <div>
            <Button className="Buttonbar">
              <span>ABOUT</span>
            </Button>
            <Button className="Buttonbar">
              <span>EXPERIENCE</span>
            </Button>
            <Button className="Buttonbar">
              <span>PROJECTS</span>
            </Button>
            <Button className="Buttonbar">
              <span>CONTACT</span>
            </Button>
          </div>
        </div>

        <div id="lowerbox">
          <p>{About}</p>
        </div>
        <div id="footer">
          <p>Updated: June 2019 </p>
        </div>
      </div>
    );
  }
}

export default App;
