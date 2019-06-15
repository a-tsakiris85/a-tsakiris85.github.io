import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TypingTitle from "./TypingTitle";

import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl
} from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div id="appcontainer">
        <Navbar bg="light" expand="lg" className="NavBar">
          <Navbar.Brand id="title">ANDREW TSAKIRIS</Navbar.Brand>
        </Navbar>
        <div id="typingtitle">
          <TypingTitle />
        </div>
      </div>
    );
  }
}

export default App;
