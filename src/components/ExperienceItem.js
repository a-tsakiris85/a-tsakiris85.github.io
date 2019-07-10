import React from "react";
import { Motion, spring } from "react-motion";
import { Image } from "react-bootstrap";

import "./ExperienceItem.css";

export default class ExperienceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  myHandleClick = () => {
    if (this.props.selected) {
      this.props.handleClick(0);
    } else {
      this.props.handleClick(this.props.col);
    }
  };

  render() {
    return (
      <Motion
        defaultStyle={{ x: 0, opacity: 0, y: 0, width: 20 }}
        style={{
          x: this.props.selected
            ? spring(-20 * (this.props.col - 1))
            : spring(0),
          y: this.props.selected ? spring(200) : spring(0),
          width: this.props.selected ? spring(80) : spring(20),
          opacity: spring(1)
        }}
      >
        {style => {
          style = {
            transform: `translateX(${style.x}em) translateY(${style.y}px)`,
            opacity: style.opacity,
            gridColumn: this.props.col,
            width: style.width + "em"
          };
          if (!this.props.selected) {
            style.textAlign = "center";
          }
          return (
            <div
              style={style}
              onClick={this.myHandleClick}
              className="ExperienceItem"
            >
              {this.props.selected
                ? this.renderSelected()
                : this.renderUnselected()}
            </div>
          );
        }}
      </Motion>
    );
  }

  renderSelected = () => {
    return (
      <div className="SelectedGrid">
        <div className="ImageContainer">
          <Image
            style={{ maxHeight: "10em" }}
            src={this.props.item.img}
            fluid
          />
        </div>
        <div className={"TitleDiv"}>
          <p className="Position">{this.props.item.position} </p>
          <p className="Organization">{this.props.item.organization} </p>
          <p className="Location">{this.props.item.location} </p>
          <p className="DateString">{this.props.item.dateString} </p>
        </div>
        <div className="DescriptionDiv">
          <p className="Label">Description:</p>
          <p className="Description">{this.props.item.description}</p>
        </div>
      </div>
    );
  };

  renderUnselected = () => {
    return (
      <div>
        <div className="ImageContainer">
          <Image
            style={{ maxHeight: "10em" }}
            src={this.props.item.img}
            fluid
          />
        </div>
        <p style={{ marginTop: "1.4em" }}>{this.props.item.position}</p>
      </div>
    );
  };
}

/*
  An experience should have a photo.
  Name of position.
  Organization.
  Date (start and end)
  Description
  Relevant links?
*/
