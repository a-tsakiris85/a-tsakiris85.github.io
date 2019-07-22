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
    const width = document.documentElement.clientWidth;
    if (width > 700) {
      return this.renderDesktop();
    } else {
      return this.renderPhone();
    }
  }

  renderPhone = () => {
    return (
      <Motion
        defaultStyle={{ height: 7 }}
        style={{
          height: this.props.selected ? spring(30) : spring(7)
        }}
      >
        {style => {
          style = {
            height: style.height + "em"
          };

          return (
            <div
              style={style}
              onClick={this.myHandleClick}
              className="ExperienceItem"
            >
              {this.props.selected
                ? this.renderSelectedPhone()
                : this.renderUnselectedPhone()}
            </div>
          );
        }}
      </Motion>
    );
  };

  renderSelectedPhone = () => {
    return (
      <React.Fragment>
        <div>
          <div className="ImageContainer" style={{ marginRight: "0.3em" }}>
            <Image
              style={{ maxHeight: "5em" }}
              src={this.props.item.img}
              fluid
            />
          </div>
          <div style={{ textAlign: "left", marginLeft: "5em" }}>
            {this.props.item.position === "Software Engineering Intern" ? (
              <p style={{ fontSize: "1.2em" }} className="Position">
                {this.props.item.position}
              </p>
            ) : (
              <p className="Position">{this.props.item.position}</p>
            )}
            <p className="Organization">{this.props.item.organization}</p>
            <p className="Location">{this.props.item.location}</p>
          </div>
        </div>
        <div className="DescriptionDiv" style={{ marginLeft: "1.5em" }}>
          <p className="Label">Description:</p>
          <p className="Description">{this.props.item.description}</p>
        </div>
        <p className="DateString">{this.props.item.dateString} </p>
      </React.Fragment>
    );
  };

  renderUnselectedPhone = () => {
    return (
      <React.Fragment>
        <div className="ImageContainer">
          <Image style={{ maxHeight: "5em" }} src={this.props.item.img} fluid />
        </div>
        <p className="UnselectedPosition">{this.props.item.position}</p>
      </React.Fragment>
    );
  };
  renderDesktop = () => {
    return (
      <Motion
        defaultStyle={{ x: 0, opacity: 0, y: 0, width: 20 }}
        style={{
          x: this.props.selected
            ? spring(-20 * (this.props.col - 1))
            : spring(0),
          y: this.props.selected ? spring(220) : spring(0),
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
                ? this.renderSelectedDesktop()
                : this.renderUnselectedDesktop()}
            </div>
          );
        }}
      </Motion>
    );
  };

  renderSelectedDesktop = () => {
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

  renderUnselectedDesktop = () => {
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
