import React from "react";
import profilepic from "../images/profile.gif";
import { About } from "../about";

import TypingTitle from "../TypingTitle";
import NavLink from "../components/NavLink";

import "./Home.css";

import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
  Image
} from "react-bootstrap";

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="typingtitle">
          <div id="profilecontainer">
            <Image
              src={profilepic}
              fluid
              style={{ width: "19em", height: "19em" }}
            />
          </div>

          <TypingTitle />
          <div id="buttons">
            <Button
              onClick={() => this.props.onClick("ABOUT")}
              className="Buttonbar"
            >
              <span>ABOUT</span>
            </Button>
            <Button
              onClick={() => this.props.onClick("EXPERIENCE")}
              className="Buttonbar"
            >
              <span>EXPERIENCE</span>
            </Button>
            <Button
              onClick={() => this.props.onClick("PROJECTS")}
              className="Buttonbar"
            >
              <span>PROJECTS</span>
            </Button>
            <Button
              onClick={() => this.props.onClick("CONTACT")}
              className="Buttonbar"
            >
              <span>CONTACT</span>
            </Button>
          </div>
        </div>

        <div id="lowerbox">
          <p>{About}</p>
        </div>
      </div>
    );
  }
}
