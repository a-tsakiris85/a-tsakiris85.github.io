import React from "react";
import ExperienceItem from "../components/ExperienceItem";
import { exp1 } from "../ExperienceInfo.js";
import "../App.css";

export default class Experience extends React.Component {
  render() {
    return (
      <div
        className="Page"
        style={{
          width: "100%"
        }}
      >
        <div
          style={{
            display: "grid",
            gridAutoColumns: "20em 20em 20em 20em",
            gridColumnGap: "0px",
            width: "80em",
            margin: "auto auto"
          }}
        >
          <ExperienceItem col={1} item={exp1} />
          <ExperienceItem col={2} item={exp1} />
          <ExperienceItem col={3} item={exp1} />
          <ExperienceItem col={4} item={exp1} />
        </div>
      </div>
    );
  }
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
