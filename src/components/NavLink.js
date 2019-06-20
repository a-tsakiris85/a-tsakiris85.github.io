import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavLink.css";

export default function NavLink(props) {
  return (
    <button className="HeaderButton" onClick={() => props.onClick(props.text)}>
      <p className="ButtonText">{props.text}</p>
    </button>
  );
}
