import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavLink.css";

export default function NavLink(props) {
  if (props.text == "ANDREW TSAKIRIS") {
    return (
      <button
        style={{
          float: "left",
          fontSize: "1em",
          marginLeft: "1em"
        }}
        className="HeaderButton"
        onClick={() => props.onClick(props.text)}
      >
        {props.text}
      </button>
    );
  }
  return (
    <button
      style={{ float: "right" }}
      className="HeaderButton"
      onClick={() => props.onClick(props.text)}
    >
      {props.text}
    </button>
  );
}
