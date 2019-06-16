import React from "react";
import logo from "./logo.svg";
import profilepic from "./profile.gif";
import "./App.css";

import TypingTitle from "./TypingTitle";

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
        <Navbar bg="light" expand="lg" className="NavBar">
          <Navbar.Brand id="title">ANDREW TSAKIRIS</Navbar.Brand>
        </Navbar>
        <div
          id="typingtitle"
          style={{
            display: "grid",
            gridTemplateColumn: "20% 80%",
            gridTemplateRow: "100px auto"
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
              <span>OTHER</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
