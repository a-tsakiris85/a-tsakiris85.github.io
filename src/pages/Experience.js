import React from "react";
import ExperienceItem from "../components/ExperienceItem";
import { exp1, exp2, exp3, exp4 } from "../ExperienceInfo.js";
import "../App.css";
import "./Experience.css";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_selected: 0
    };
  }
  render() {
    return (
      <div
        className="Page"
        style={{
          width: "100%"
        }}
      >
        <h1 className="PageTitle">EXPERIENCE</h1>
        <div className="ExperienceItemContainer">
          <ExperienceItem
            handleClick={this.handleClick}
            selected={this.state.item_selected == 1}
            col={1}
            item={exp1}
          />
          <ExperienceItem
            handleClick={this.handleClick}
            selected={this.state.item_selected == 2}
            col={2}
            item={exp2}
          />
          <ExperienceItem
            handleClick={this.handleClick}
            selected={this.state.item_selected == 3}
            col={3}
            item={exp3}
          />
          <ExperienceItem
            handleClick={this.handleClick}
            selected={this.state.item_selected == 4}
            col={4}
            item={exp4}
          />
        </div>
        {this.state.item_selected == 0 ? (
          <p className="Message">Click on an Experience Above to Expand</p>
        ) : (
          <div />
        )}
      </div>
    );
  }

  handleClick = item_selected => {
    this.setState({ item_selected });
  };
}

/*
  My experiences:
  Ridgeline Internship
  Temple Research
  TA
  College Academy Instructor
  -----
  Involvements section??
  Tour Guide
  TA (again?)
  TT Philanthropy Chair
  Outdoor Odyssey Guide
  ------------
  Projects
  Temple Research
  Arcade Baseball
  Critter World
  This Website
  Trails App?
  -----------
  Course work section? could be good....
*/
