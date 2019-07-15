import React from "react";
import "./ProjectItem.css";

export default class ProjectItem extends React.Component {
  render() {
    return (
      <div className="ProjectItem">
        <div className="ProjectImageContainer">
          <img className="ProjectImage" src={this.props.item.image} />
        </div>
        <div className="ProjectInfo">
          <p className="ProjectTitle">
            <span>{this.props.item.title} </span>{" "}
            <span className="ProjectDate"> {this.props.item.dateString} </span>
          </p>
          <p className="ProjectSubtitle">{this.props.item.subtitle}</p>

          <p className="ProjectDescription">{this.props.item.description}</p>
          <div className="LinkContainer">
            <p className="LinkLabel">Links:</p>
            {this.props.item.links.map(item => {
              return (
                <div className="LinkImageContainer">
                  <a href={item.link} target="_blank">
                    <img className="LinkImage" src={item.linkIcon} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
