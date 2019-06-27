import React from "react";

import pic from "../images/profile.gif";

import { Image } from "react-bootstrap";

import { Motion, spring } from "react-motion";

import "./ContentItem.css";

//props needs a description, title, and image.
export default class ContentItem extends React.Component {
  render() {
    return (
      <Motion
        defaultStyle={{ x: -100, opacity: 0 }}
        style={{
          opacity: spring(1, { stiffness: 50, damping: 17 }),
          x: spring(0)
        }}
      >
        {style => (
          <div
            style={{
              gridColumn: this.props.col,
              opacity: style.opacity,
              transform: `translateX(${style.x}px)`
            }}
            className="outerContentItemDiv"
          >
            <div className="imageDiv">
              <Image style={{ maxHeight: "10em" }} src={this.props.img} fluid />
            </div>
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
          </div>
        )}
      </Motion>
    );
  }
}
