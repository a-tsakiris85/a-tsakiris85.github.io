import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavLink(props) {
  const style = {
    color: "#eeeeee",
    marginLeft: "20px",
    fontSize: "1em"
  };
  return (
    <span style={style}>
      <Navbar.Brand style={style} href={props.href}>
        {props.text}
      </Navbar.Brand>
    </span>
  );
}
