import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavLink.css";

export default function NavLink(props) {
  const style = {
    color: "#eeeeee",

    marginLeft: "1em",
    fontSize: "1em"
  };
  return (
    <span style={style} className="spaa">
      <Navbar.Brand style={style} href={props.href} className="d">
        <button
          className="HeaderButton"
          onClick={() => props.onClick(props.text)}
        >
          <p>{props.text}</p>
        </button>
      </Navbar.Brand>
    </span>
  );
}
