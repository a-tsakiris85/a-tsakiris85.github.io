import React from "react";
import { Motion, spring } from "react-motion";

import "./ExperienceItem.css";

export default class ExperienceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <Motion
        defaultStyle={{ x: 0, opacity: 0, y: 0, width: 20 }}
        style={{
          x: this.state.expanded
            ? spring(-20 * (this.props.col - 1))
            : spring(0),
          y: this.state.expanded ? spring(200) : spring(0),
          width: this.state.expanded ? spring(80) : spring(20),
          opacity: spring(1)
        }}
      >
        {style => (
          <div
            onClick={this.handleClick}
            className="ExperienceItem"
            style={{
              transform: `translateX(${style.x}em) translateY(${style.y}px)`,
              opacity: style.opacity,
              gridColumn: this.props.col,
              width: style.width + "em"
            }}
          >
            <p>here is some stuff</p>{" "}
          </div>
        )}
      </Motion>
    );
  }
}

/*
  An experience should have a photo.
  Name of position.
  Organization.
  Date (start and end)
  Description
  Relevant links?
*/
