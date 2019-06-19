import React from "react";
import profilepic from "../images/profile.gif";
import { About } from "../about";

import TypingTitle from "../TypingTitle";
import NavLink from "../NavLink";

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
      </div>
    );
  }
}
