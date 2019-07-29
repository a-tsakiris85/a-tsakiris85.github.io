import React from "react";
import objects from "../InterestsInfo";
import "./Interests.css";
export default class Interests extends React.Component {
  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">INTERESTS</h1>
        <div className="Interests">
          {objects.map(item => this.renderItem(item))}
        </div>
      </div>
    );
  }

  renderItem = item => {
    return (
      <div className="InterestsContainer">
        <div className="InterestsTitle">
          <p>{item.title} </p>
        </div>
        <div className="InterestsList">
          {item.contents.map(x => {
            return <p> {x} </p>;
          })}
        </div>
      </div>
    );
  };
}
