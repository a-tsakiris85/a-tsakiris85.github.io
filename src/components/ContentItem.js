import React from "react";

import pic from "../images/profile.gif";

import { Image } from "react-bootstrap";

import "./ContentItem.css";

//props needs a description, title, and image.
export default class ContentItem extends React.Component {
  render() {
    return (
      <div
        style={{ gridColumn: this.props.col }}
        className="outerContentItemDiv"
      >
        <div className="imageDiv">
          <Image style={{ maxHeight: "10em" }} src={this.props.img} fluid />
        </div>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
